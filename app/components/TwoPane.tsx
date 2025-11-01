"use client";

import React from "react";

export default function TwoPane({
  left,
  right,
  className,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <div className="hidden pr-6 lg:block">{left}</div>
        <div className="min-w-0">{right}</div>
      </div>
    </div>
  );
}
