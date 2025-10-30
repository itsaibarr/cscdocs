import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import ModuleTabs from "../components/ModuleTabs";
import Footer from "../components/Footer";

export default function ModuleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f1115] text-zinc-200 antialiased">
      <Navbar />
      <ModuleTabs />
      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
