"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/intro" className="text-[17px] font-semibold tracking-tight text-white">
          Web Dev
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 sm:flex">
          <Link href="https://instagram.com" className="hover:text-white transition-colors" target="_blank">
            Инстаграм
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Ресурсы
          </Link>
          <Link
            href="#contact"
            className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-emerald-500"
          >
            Связаться с нами
          </Link>
        </nav>
      </div>
    </header>
  );
}
