"use client";

import { useEffect, useState } from "react";

export default function FadeIn({
  children,
  keyDep,
}: {
  children: React.ReactNode;
  keyDep: string;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [keyDep]);

  return (
    <div
      className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
