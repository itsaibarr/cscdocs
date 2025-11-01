import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import ModuleTabs from "../components/ModuleTabs";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { ModuleTopicProvider } from "../components/ModuleTopicContext";
import { getModule } from "../courseData";
import TwoPane from "../components/TwoPane";

export default async function ModuleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ module: string }>;
}) {
  const { module: moduleSlug } = await params;

  const current = getModule(moduleSlug);
  const defaultTopic = current?.sections?.[0]?.items?.[0] ?? "";

  return (
    <div className="min-h-screen bg-[#0A0D1A] text-zinc-200 antialiased">
      <Navbar />
      <ModuleTabs />
      <ModuleTopicProvider defaultTopic={defaultTopic}>
        <TwoPane
          className="py-10"
          left={<Sidebar slug={moduleSlug} />}
          right={
            <div className="min-w-0">
              {children}
              <Footer />
            </div>
          }
        />
      </ModuleTopicProvider>
    </div>
  );
}

