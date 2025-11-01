"use client";

import { useModuleTopic } from "./ModuleTopicContext";
import * as course from "../courseData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { slugify } from "../utils/slug";

export default function Sidebar({ slug }: { slug: string }) {
  const mod = course.getModule(slug);
  const { setActiveTopic } = useModuleTopic();
  const pathname = usePathname();

  if (!mod) return null;

  return (
    <aside className="pr-6 text-sm text-zinc-300">
      <div className="space-y-8">
        {mod.sections.map((section) => (
          <div key={section.label} className="space-y-3">
            <div className="text-[16px] font-semibold">{section.label}</div>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const topicSlug = slugify(item);
                const href = `/${slug}/${topicSlug}`;
                const isActive = pathname === href;

                return (
                  <li key={item}>
                    <Link
                      href={href}
                      onClick={() => setActiveTopic(item)}
                      className={`block w-full text-left transition-colors ${
                        isActive ? "font-semibold text-green-600" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
