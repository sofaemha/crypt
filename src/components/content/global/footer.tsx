"use client";
import { useState } from "react";
import { Command } from "@/components/container/ui/command";
import { Button } from "@/components/ui/button";

export default function Footer({ session }: { session: Record<string, unknown> | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const tahun = new Date().getFullYear();

  function toggleIsOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <>
      <footer className="sm:rounded-lg rounded-t-3xl shadow border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
        <div className="w-full max-w-screen-xl mx-auto p-8 sm:p-4 text-start flex items-center justify-between">
          <span className="text-sm ml-4 text-start text-gray-500 dark:text-gray-400">
            <a href="https://sofa.my.id/" className="hover:underline hover:decoration-dotted">
              Sofa Machabba Haetas
            </a>
            <br />
            All Rights Reserved © 2022 &minus; {tahun}
          </span>
          <ul className="flex flex-wrap items-center justify-center sm:justify-normal mt-1 sm:mt-0">
            <li>
              <Button variant="link" onClick={toggleIsOpen} className="list-item mr-4 p-0 h-auto hover:underline hover:decoration-dotted sm:mr-6 text-gray-500 dark:text-gray-400">
                Command
              </Button>
            </li>
            <li>
              <Button variant="link" className="list-item mr-4 p-0 h-auto hover:underline hover:decoration-dotted sm:mr-6 text-gray-500 dark:text-gray-400">
                FAQ
              </Button>
            </li>
          </ul>
        </div>
      </footer>
      <Command showCommand={isOpen} setCommand={setIsOpen} toggleCommand={toggleIsOpen} session={session} />
    </>
  );
}
