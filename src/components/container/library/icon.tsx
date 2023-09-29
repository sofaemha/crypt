"use client";
import React from "react";
import loadable from "@loadable/component";

interface IconType {
  iconName: string;
  iconFolder: string;
  iconProps?: React.SVGProps<SVGSVGElement>;
}

export default function Icon({ iconName, iconFolder, iconProps }: IconType) {
  const Icon = loadable(() =>
    import(`react-icons/${iconFolder}/`).then((module) => {
      return module[iconName];
    })
  );
  return React.createElement(Icon, iconProps);
}
