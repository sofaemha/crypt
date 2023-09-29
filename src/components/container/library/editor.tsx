"use client";
import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

interface EditorJSType {
  onChange(val: OutputData): void;
  className?: string;
  data?: OutputData;
  holder: string;
}

const Component: React.FC<EditorJSType> = ({ data, onChange, holder, className }) => {
  const element = useRef<EditorJS>();

  useEffect(() => {
    if (!element.current) {
      const editor = new EditorJS({
        logLevel: "ERROR" as any,
        holder: holder,
        data,
        onReady() {},
        autofocus: true,
        async onChange(api, e) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      element.current = editor;
    }

    return () => {
      if (element.current && element.current.destroy) {
        element.current.destroy();
      }
    };
  }, []);

  return <div className={className} id={holder} />;
};

export default memo(Component);
