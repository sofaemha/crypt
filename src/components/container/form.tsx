"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Icon from "@/components/container/icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  username: z.string().min(5, { message: "Account name must be at least 5 characters." }).max(25, { message: "Account name must be 25 or fewer characters long." }),
  password: z.string().min(10, { message: "Password must be at least 10 characters." }).max(50, { message: "Password must be 50 or fewer characters long." }),
});

export default function LoginForm() {
  const [isSubmit, setIsSubmit] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: process.env.NEXT_PUBLIC_ADMINISTRATOR_USERNAME as string,
      password: process.env.NEXT_PUBLIC_ADMINISTRATOR_PASSWORD as string,
    },
  });

  async function onSubmit(input: z.infer<typeof formSchema>) {
    try {
      setIsSubmit(true);
      const data = await fetch("/api/auth/in/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const result = JSON.parse(await data.text());

      if (result?.error) {
        setIsSubmit(false);
        toast({
          variant: "danger",
          title: result.text,
        });
      } else {
        setIsSubmit(false);
        router.refresh();
      }
    } catch (error) {
      setIsSubmit(false);
      console.error(error);
    }
  }

  return (
    <Card className="py-4 ps-6 pe-2 mx-4 sm:mx-0 rounded-3xl sm:rounded-lg bg-white dark:bg-slate-900">
      <CardHeader>
        <CardTitle>Administrator Privileges</CardTitle>
        <CardDescription>Other than those authorized are prohibited from entering.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unique Account</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} disabled={isSubmit} />
                  </FormControl>
                  <FormDescription>Personal accounts that are managed directly without a third party.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Encrypted Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} disabled={isSubmit} />
                  </FormControl>
                  <FormDescription>Passwords that have been modified by third parties.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmit} className="rounded-xl sm:rounded-md h-auto px-5 py-3 mb-2 mt-4 ml-auto mr-4 sm:mx-0 sm:w-full flex items-center justify-center font-medium dark:bg-slate-950 dark:hover:bg-slate-950/75 dark:text-white">
              Submit
              <Icon iconName={isSubmit ? "RiLoader4Fill" : "RiSendPlane2Fill"} iconFolder="ri" iconProps={{ className: `w-4 h-4 ml-2 ${isSubmit ? "animate-spin" : ""}` }} />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
