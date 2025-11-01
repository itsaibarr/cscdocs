import type { ComponentType } from "react";
import FadeIn from "../../components/FadeIn";
import { getModule } from "../../courseData";
import { slugify } from "../../utils/slug";

export default async function TopicPage({
  params,
}: {
  params: Promise<{ module: string; topic: string }>;
}) {
  const { module: moduleSlug, topic: topicSlug } = await params;
  const mod = getModule(moduleSlug);

  const allItems = mod?.sections.flatMap((s) => s.items) ?? [];
  const topicLabel =
    allItems.find((it) => slugify(it) === topicSlug) ?? decodeURIComponent(topicSlug);

  // Попытка динамически импортировать компонент с контентом темы
  let TopicComp: ComponentType | null = null;
  try {
    TopicComp = (await import(`../../topics/${moduleSlug}/${topicSlug}`)).default as ComponentType;
  } catch {
    // файл с контентом не найден — оставляем TopicComp = null
  }

  return (
    <FadeIn keyDep={`${moduleSlug}__${topicSlug}`}>
      <article className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-white">
          {topicLabel}
        </h1>

        {TopicComp ? (
          // Если есть отдельный компонент для темы - отрисовываем его
          <TopicComp />
        ) : (
          // Если нет - показываем запасной текст
          <div className="space-y-4 text-zinc-300 leading-7">
            <p>
              Контент для темы «{topicLabel}» находится в разработке.
            </p>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm">
                Чтобы добавить контент для этой темы, создайте файл:
                <br />
                <code className="mt-2 block rounded bg-black/30 p-2 text-emerald-400">
                  app/topics/{moduleSlug}/{topicSlug}.tsx
                </code>
              </p>
            </div>
          </div>
        )}
      </article>
    </FadeIn>
  );
}