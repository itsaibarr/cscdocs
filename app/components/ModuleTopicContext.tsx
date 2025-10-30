"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Ctx = {
  slug: string;
  activeTopic: string;
  setActiveTopic: (t: string) => void;
};

const ModuleTopicContext = createContext<Ctx | undefined>(undefined);

export function ModuleTopicProvider({
  slug,
  defaultTopic,
  children,
}: {
  slug: string;
  defaultTopic?: string;
  children: React.ReactNode;
}) {
  const [activeTopic, setActiveTopic] = useState<string>(defaultTopic ?? "");
  const value = useMemo(() => ({ slug, activeTopic, setActiveTopic }), [slug, activeTopic]);
  return <ModuleTopicContext.Provider value={value}>{children}</ModuleTopicContext.Provider>;
}

export function useModuleTopic(): Ctx {
  const ctx = useContext(ModuleTopicContext);
  if (!ctx) {
    throw new Error("useModuleTopic must be used within ModuleTopicProvider");
  }
  return ctx;
}
