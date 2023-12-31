"use client";
import Loading from "@/components/container/skeleton/message";
import Create from "@/components/content/client/create";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tab({ variant = "app" }: { variant?: string }) {
  const isReply: boolean = variant === "reply" ? true : false;

  return (
    <Tabs defaultValue="crypt" className="w-full">
      <TabsList className="grid w-full grid-cols-2 h-auto rounded-3xl sm:rounded-lg border border-slate-200 dark:border-slate-800">
        <TabsTrigger className="text-base py-3 m-1 rounded-3xl sm:rounded-md" value="crypt">
          Cryptic
        </TabsTrigger>

        <TabsTrigger className="text-base py-3 m-1 rounded-3xl sm:rounded-md" value={isReply ? "reply" : "create"}>
          {isReply ? "Reply" : "Create"}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="crypt" className="data-[state=active]:grid data-[state=active]:gap-4 data-[state=active]:mt-4">
        <Loading count={5} />
      </TabsContent>

      <TabsContent value={isReply ? "reply" : "create"} className="data-[state=active]:mt-4">
        {isReply ? "<Reply />" : <Create />}
      </TabsContent>
    </Tabs>
  );
}
