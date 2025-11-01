"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Ctx = {
  activeTopic: string;
  setActiveTopic: (t: string) => void;
};

const ModuleTopicContext = createContext<Ctx | undefined>(undefined);

export function ModuleTopicProvider({
  defaultTopic,
  children,
}: {
  defaultTopic?: string;
  children: React.ReactNode;
}) {
  const [activeTopic, setActiveTopic] = useState<string>(defaultTopic ?? "");
  const value = useMemo(() => ({ activeTopic, setActiveTopic }), [activeTopic]);
  return <ModuleTopicContext.Provider value={value}>{children}</ModuleTopicContext.Provider>;
}

export function useModuleTopic(): Ctx {
  const ctx = useContext(ModuleTopicContext);
  if (!ctx) {
    throw new Error("useModuleTopic must be used within ModuleTopicProvider");
  }
  return ctx;
}
