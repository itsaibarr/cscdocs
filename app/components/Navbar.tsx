"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 backdrop-blur-md">
      <div className="mx-auto flex h-16 container items-center justify-between">
        <Link href="/intro" className="text-[18px] font-medium tracking-tight text-white">
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
            href="#"
            className="rounded-lg bg-green-800 px-4 py-2 font-medium text-white shadow-sm transition-colors"
          >
            Связаться с нами
          </Link>
        </nav>
      </div>
    </header>
  );
}
