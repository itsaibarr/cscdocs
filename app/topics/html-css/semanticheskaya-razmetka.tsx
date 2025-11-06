export default function semanticheskayaRazmetkaTopic() {
    return (
        <div className="space-y-4 text-zinc-300 leading-7">
            <iframe
                width="800"
                height="440"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="YouTube video player"
                frameBorder="0"
                className="rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />

            <h2 className="text-xl font-semibold text-white"> 1. Что такое семантическая разметка?</h2>
            <p>Семантическая разметка — это способ писать код так, чтобы он имел смысл не только для браузера, но и для людей и поисковых систем. Вместо простых контейнеров вроде &lt;div&gt; и &lt;span&gt; используются специальные теги, описывающие смысл содержимого.</p>

            <h3 className="text-lg font-semibold text-white">Например:</h3>
            <ul className="list-disc pl-6">
                <li>&lt;header&gt; — шапка сайта (логотип, меню, заголовок страницы)</li>
                <li>&lt;nav&gt; — навигация по сайту</li>
                <li>&lt;main&gt; — основная часть страницы</li>
                <li>&lt;section&gt; — логический раздел контента</li>
                <li>&lt;article&gt; — отдельная статья или пост</li>
                <li>&lt;aside&gt; — боковая информация (например, реклама или ссылки)</li>
                <li>&lt;footer&gt; — нижняя часть страницы (контакты, копирайт)</li>
            </ul>

            <h3 className="text-lg text-white font-semibold">Использование семантических тегов помогает:</h3>
            <ul className="list-decimal pl-6">
                <li>📚 Упорядочить код — страницы становятся понятнее для других разработчиков.</li>
                <li>🔍 SEO-оптимизация — поисковики лучше понимают структуру сайта.</li>
                <li>♿ Доступность — экранные дикторы корректно читают страницу для людей с ограничениями по зрению.</li>
            </ul>

            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<header>
  <h1>Новости CSC</h1>
  <nav>
    <a href="#">Главная</a>
    <a href="#">О нас</a>
    <a href="#">Контакты</a>
  </nav>
</header>

<main>
  <article>
    <h2>Наш первый хакатон</h2>
    <p>В клубе CSC прошёл первый хакатон по веб-разработке...</p>
  </article>

  <aside>
    <h3>Полезные ссылки</h3>
    <ul>
      <li><a href="#">GitHub</a></li>
      <li><a href="#">MDN HTML</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>© 2025 CSC Platform</p>
</footer>
`}</code></pre>
            </div>

            <h2 className="text-xl font-semibold text-white">💻 Мини-практика</h2>
            <h3 className="text-white text-lg font-semibold">Задание:</h3>
            <ul className="list-decimal pl-6">
                <li>Создай новый файл semantic.html.</li>
                <li>Сверстай простую страницу о своём любимом фильме или игре, используя семантические теги.</li>
            </ul>
            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<header>Заголовок страницы (название фильма/игры)</header>
<nav>Меню с 2–3 ссылками</nav>
<main>
  <article>
    <h2>О фильме/игре</h2>
    <p>Краткое описание сюжета.</p>
  </article>

  <section>
    <h3>Интересные факты</h3>
    <ul>
      <li>Факт 1</li>
      <li>Факт 2</li>
    </ul>
  </section>

  <aside>
    <h3>Ссылки</h3>
    <a href="#">Официальный сайт</a>
  </aside>
</main>
<footer>Автор страницы и год</footer>`}</code></pre>
            </div>
        </div>
    );
}