"use client";

import React, { useEffect, useRef, useState } from "react";

export default function TwoPane({
  left,
  right,
  className,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const measure = () => {
    const el = rootRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    const h = Math.max(200, window.innerHeight - top);
    setHeight(h);
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div ref={rootRef} className={className}>
      <div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 lg:grid-cols-[16rem_minmax(0,1fr)]"
        style={height ? { height } : undefined}
      >
        <div className="hidden h-full overflow-y-auto pr-6 lg:block">
          {left}
        </div>
        <div className="h-full min-w-0 overflow-y-auto">
          {right}
        </div>
      </div>
    </div>
  );
}
