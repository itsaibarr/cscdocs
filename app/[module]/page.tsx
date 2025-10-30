"use client";

import FadeIn from "../components/FadeIn";
import Sidebar from "../components/Sidebar";
import { getModule, introContent } from "../courseData";

export default function ModulePage({ params }: { params: { module: string } }) {
  const slug = params.module;
  const mod = getModule(slug);

  const isIntro = slug === "intro";

  return (
    <>
      <Sidebar slug={slug} />
      <div className="min-w-0">
        <FadeIn keyDep={slug}>
          <article className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-semibold tracking-tight text-white">
              {mod?.label ?? "Модуль"}
            </h1>

            {isIntro ? (
              <>
                <div className="space-y-4 text-zinc-300 leading-7">
                  {introContent.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <section className="mt-10">
                  <h2 className="mb-4 text-xl font-semibold text-white">
                    Чему вы научитесь на курсе
                  </h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    {introContent.learnCards.map((c) => (
                      <div
                        key={c.title}
                        className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm"
                      >
                        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                          {c.icon === "pen" ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.004 1.004 0 0 0 0-1.42l-2.34-2.34a1.004 1.004 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
                            </svg>
                          ) : c.icon === "team" ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                          ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M11 21h-1l1-7H7l6-11h1l-1 7h4l-6 11z" />
                            </svg>
                          )}
                        </div>
                        <div className="text-base font-semibold text-white">{c.title}</div>
                        <div className="mt-1 text-sm text-zinc-400">{c.text}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            ) : (
              <div className="space-y-4 text-zinc-300">
                <p>
                  Материалы для модуля «{mod?.label ?? slug}» появятся здесь. Пока это заглушка, но каркас уже готов —
                  можно наполнять уроками и разделами.
                </p>
              </div>
            )}
          </article>
        </FadeIn>
      </div>
    </>
  );
}
