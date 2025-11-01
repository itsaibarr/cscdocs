
import FadeIn from "../components/FadeIn";
import Sidebar from "../components/Sidebar";
import { getModule } from "../courseData";

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
            <div className="space-y-4 text-zinc-300">
                <p>
                    Материалы для модуля «{mod?.label ?? slug}» появятся здесь. Пока это заглушка, но каркас уже готов —
                    можно наполнять уроками и разделами.
                </p>
            </div>
          </article>
        </FadeIn>
      </div>
    </>
  );
}
