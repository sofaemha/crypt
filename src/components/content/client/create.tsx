"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import Icon from "@/components/container/library/icon";
import { Button } from "@/components/ui/button";

const Editor = dynamic(() => import("@/components/container/library/editor"), { ssr: false });

export default function Create() {
  const [data, setData] = useState<OutputData>();
  const [disabled, _] = useState(false);

  return (
    <>
      <Editor data={data} onChange={setData} holder="editorjs" className="py-4 ps-6 pe-2 mx-4 sm:mx-0 rounded-xl bg-white dark:bg-slate-900 text-black dark:text-white border border-slate-200 dark:border-slate-800 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
      <Button variant="outline" disabled={disabled} className="rounded-xl sm:rounded-md h-auto px-5 py-3 mt-4 ml-auto mr-4 sm:mx-0 sm:w-full flex items-center justify-center font-medium bg-white dark:bg-slate-900 text-slate-500 hover:text-black dark:text-slate-400 hover:dark:text-white">
        Encrypt
        <Icon iconName="GoPaperAirplane" iconFolder="go" iconProps={{ className: "w-4 h-4 ml-2" }} />
      </Button>
    </>
  );
}
