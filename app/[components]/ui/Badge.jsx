import React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground transition-colors",
        className
      )}
      {...props}
    />
  );
}
