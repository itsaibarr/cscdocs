"use client";

import { getModule } from "../courseData";

export default function Sidebar({ slug }: { slug: string }) {
  const mod = getModule(slug);

  if (!mod) return null;

  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-64 shrink-0 overflow-y-auto pr-6 text-sm text-zinc-300 lg:block">
      <div className="space-y-8">
        {mod.sections.map((section) => (
          <div key={section.label} className="space-y-3">
            <div className="text-white/90 font-semibold">{section.label}</div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item}>
                  <span className="cursor-default text-zinc-400 hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
