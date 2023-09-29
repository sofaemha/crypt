"use client";
import { useRouter } from "next/navigation";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Icon from "@/components/container/library/icon";
import { useToast } from "@/components/ui/use-toast";

export default function Privileges({ session, cookie }: { session: Record<string, any> | null; cookie: RequestCookie | undefined }) {
  const { toast } = useToast();
  const router = useRouter();

  async function destroySession() {
    const data = await fetch("/api/auth/out/", { method: "POST" });
    const result = JSON.parse(await data.text());

    if (result?.error) {
      toast({
        variant: "danger",
        title: result.text,
      });
    } else {
      router.refresh();
    }
  }

  return (
    <>
      <Card className="overflow-x-hidden py-4 ps-6 pe-2 mx-4 sm:mx-0 rounded-3xl sm:rounded-lg bg-white dark:bg-slate-900">
        <CardHeader>
          <CardTitle>Administrator Privileges</CardTitle>
          <CardDescription>The following content is your data registered in the authorization system.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center min-w-[125px]">Keywords</TableHead>
                <TableHead className="text-center">Information</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell className="truncate !max-w-xs">{session?.account.username || "Unknown"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Password</TableCell>
                <TableCell className="truncate !max-w-xs">{session?.account.password || "Unknown"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cookie Name</TableCell>
                <TableCell className="truncate !max-w-xs">{(cookie?.name as string) || "Unknown"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cookie Value</TableCell>
                <TableCell className="truncate !max-w-xs">{(cookie?.value as string) || "Unknown"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Separator className="dark:bg-white" />
        </CardContent>
      </Card>
      <Button variant="outline" onClick={destroySession} className="rounded-xl sm:rounded-md h-auto px-5 py-3 mx-4 sm:mx-0 flex items-center justify-center font-medium bg-white dark:bg-slate-900 dark:text-white">
        Sign Out
        <Icon iconName="LuLogOut" iconFolder="lu" iconProps={{ className: "h-4 w-4 ml-2" }} />
      </Button>
    </>
  );
}
