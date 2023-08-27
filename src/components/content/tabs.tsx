"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loading from "@/components/container/loading";
import Create from "@/components/content/create";

export default function Tab() {
  return (
    <Tabs defaultValue="crypt" className="w-full">
      <TabsList className="grid w-full grid-cols-2 h-auto rounded-3xl sm:rounded-lg border border-slate-200 dark:border-slate-800">
        <TabsTrigger className="text-base py-3 m-1 rounded-3xl sm:rounded-md" value="crypt">
          Cryptic
        </TabsTrigger>
        <TabsTrigger className="text-base py-3 m-1 rounded-3xl sm:rounded-md" value="create">
          Create
        </TabsTrigger>
      </TabsList>
      <TabsContent value="crypt" className="data-[state=active]:grid data-[state=active]:gap-4 data-[state=active]:mt-4">
        <Loading count={5}/>
      </TabsContent>
      <TabsContent value="create" className="data-[state=active]:mt-4">
        <Create/>
      </TabsContent>
    </Tabs>
  );
}
