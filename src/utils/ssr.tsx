import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export function createBrowserOnlyLibComponent(libName: string, componentExportName: string, props: any) {
  return (
    <BrowserOnly fallback={<div>...</div>}>
      {() => {
        const Component = require(libName)[componentExportName];
        return <Component {...props} />;
      }}
    </BrowserOnly>
  );
};