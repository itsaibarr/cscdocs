"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { modules } from "../courseData";

export default function ModuleTabs() {
  const pathname = usePathname();
  return (
    <div className="w-full border-b border-white/5">
      <div className="mx-auto max-w-6xl overflow-x-auto px-4">
        <div className="flex gap-6">
          {modules.map((m) => {
            const active = pathname === `/${m.slug}`;
            return (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                className={`relative py-4 text-sm text-zinc-300 hover:text-white transition-colors ${
                  active ? "text-white" : ""
                }`}
              >
                {m.label}
                <span
                  className={`absolute -bottom-px left-0 h-[2px] w-full rounded bg-emerald-500 transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
