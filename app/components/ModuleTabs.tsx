"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { modules } from "../courseData";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function ModuleTabs() {
  const pathname = usePathname();

  // контейнер для ссылок и единый индикатор
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  // Цвет индикатора — зеленый как у первого модуля (intro)
  const defaultAccent = "#22c55e";

  // функция позиционирования индикатора по активной ссылке
  const positionIndicator = () => {
    const container = containerRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;

    // находим активную ссылку по data-атрибуту
    const activeSlug = pathname?.replace("/", "");
    const activeEl = container.querySelector<HTMLAnchorElement>(
      `a[data-slug="${activeSlug}"]`
    );

    // если нет активной — ничего не делаем
    if (!activeEl) return;

    const cRect = container.getBoundingClientRect();
    const aRect = activeEl.getBoundingClientRect();

    const left = aRect.left - cRect.left;
    const width = aRect.width;

    // мгновенная расстановка без анимации (для первого рендера)
    gsap.set(indicator, { x: left, width });
  };

  // первая установка до показа (чтобы не мигало)
  useLayoutEffect(() => {
    positionIndicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // анимация при смене пути
  useEffect(() => {
    const container = containerRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;

    const cRect = container.getBoundingClientRect();
    const activeSlug = pathname?.replace("/", "");
    const activeEl = container.querySelector<HTMLAnchorElement>(
      `a[data-slug="${activeSlug}"]`
    );
    if (!activeEl) return;

    const aRect = activeEl.getBoundingClientRect();
    const left = aRect.left - cRect.left;
    const width = aRect.width;

    gsap.to(indicator, {
      x: left,
      width,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [pathname]);

  // пересчет при ресайзе
  useEffect(() => {
    const onResize = () => positionIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full border-b border-white/5">
      <div className="container px-4">
        <div ref={containerRef} className="relative flex gap-11.5">
          {modules.map((m) => {
            const active = pathname === `/${m.slug}`;
            return (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                data-slug={m.slug}
                className={`py-4 text-[14px] text-[#9FA3A0] hover:text-white transition-colors ${
                  active ? "text-white" : ""
                }`}
              >
                {m.label}
              </Link>
            );
          })}

          {/* Единый индикатор-подчёркивание */}
          <span
            ref={indicatorRef}
            className="pointer-events-none absolute -bottom-px left-0 h-[2px] rounded"
            style={{
              backgroundColor: defaultAccent, // всегда зелёный
              width: 0,
              transform: "translateX(0px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
