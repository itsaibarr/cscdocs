export default function osnovnayaStrukturaTopic() {
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

            <p>
                Теперь, когда ты знаешь структуру страницы, пора научиться добавлять основные элементы контента — текст, заголовки, ссылки и изображения.  Они делают сайт живым и интересным 🌐
            </p>

            <h2 className="text-xl font-semibold text-white">🧠 Что такое тег</h2>

            <p>Тег — это команда для браузера: как отобразить определённый элемент на странице.</p>
            <p>Каждый тег обычно состоит из:</p>
            <ul className="list-disc pl-6">
                <li>открывающего тег</li>
                <li>содержимого</li>
                <li>закрывающего тег</li>
            </ul>

            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<p>Это абзац текста</p>`}</code></pre>
            </div>

            <h2 className="text-xl font-semibold text-white"> 1. Заголовки &lt;h1&gt; – &lt;/h6&gt;</h2>
            <p>Заголовки нужны, чтобы выделять важные части текста. Существует 6 уровней заголовков: от &lt;h1&gt; (самый крупный) до &lt;h6&gt; (самый мелкий).</p>
            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<h1>Главный заголовок</h1>
<h2>Подзаголовок</h2>
<h3>Меньше по размеру</h3>`}</code></pre>
            </div>
            <h2 className="text-xl font-semibold text-white"> 2. Параграфы &lt;p&gt;...&lt;p&gt;</h2>
            <p>Тег &lt;p&gt; используется для обычных текстовых абзацев.</p>
            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<p>HTML — это язык разметки, который помогает создавать структуру сайта.</p>`}</code></pre>
            </div>
            <h2 className="text-xl font-semibold text-white"> 3. Ссылки &lt;a&gt;...&lt;a&gt;</h2>
            <p>Ссылки ведут на другие страницы или сайты. Они создаются с помощью тега &lt;a&gt; и атрибута href (куда ведёт ссылка).</p>
            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<a href="https://csc.kz">Перейти на сайт CSC</a>`}</code></pre>
            </div>
            <p>💡 Когда пользователь нажимает на текст, он попадает по адресу, указанному в href.</p>
            <h2 className="text-xl font-semibold text-white"> 4. Изображения &lt;img&gt;</h2>
            <p>Картинки добавляются тегом &lt;img&gt;. У него нет закрывающего тега — только атрибуты:</p>
            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<img src="photo.jpg" alt="Описание картинки">`}</code></pre>
            </div>
            <ul className="list-disc pl-6">
                <li>src — путь к файлу (например, photo.jpg или ссылка на изображение).</li>
                <li>alt — текст, который показывается, если картинка не загрузилась.</li>
            </ul>
            <p>🪄 Совет: всегда добавляй alt — это помогает доступности сайта и поисковикам.</p>
            <h2 className="text-xl font-semibold text-white">💻 Мини-практика</h2>
            <p>Попробуй добавить на свою страницу всё сразу:</p>
            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<h1>Добро пожаловать в мой первый сайт!</h1>
<p>Я учусь создавать сайты с помощью HTML.</p>
<a href="https://www.google.com">Перейти в Google</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML логотип">
`}</code></pre>
            </div>
            <h3 className="text-lg font-semibold text-white">✍️ Задание</h3>
            <ul className="list-disc pl-6">
                <li>Создай новую страницу lesson3.html.</li>
                <li>
                    Добавь туда: <br/>
                    Заголовок &lt;h1&gt; со своим именем. <br/>
                    Один-два параграфа о себе. <br/>
                    Ссылку на свой любимый сайт. <br/>
                    Изображение (можно взять с интернета).
                </li>
                <li>Сохрани и открой страницу в браузере.</li>
            </ul>
        </div>
    );
}