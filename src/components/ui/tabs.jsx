"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export function Tabs(props) {
  return <TabsPrimitive.Root {...props} />;
}

export function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List className={cn("flex gap-2", className)} {...props} />
  );
}

export function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      className={cn("px-3 py-1 rounded", className)}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }) {
  return <TabsPrimitive.Content className={cn("mt-2", className)} {...props} />;
}
