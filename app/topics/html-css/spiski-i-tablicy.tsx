export default function spiskiITablicyTopic() {
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
                Иногда нужно не просто разместить текст, а структурировать информацию — например, показать план, шаги, меню или расписание.<br/> Для этого в HTML есть списки и таблицы 📋
            </p>

            <h2 className="text-xl font-semibold text-white"> 1. Списки (Lists)</h2>

            <p>Списки бывают двух типов — нумерованные и маркированные.</p>
            <h3 className="text-lg font-semibold text-white">Маркированный список — &lt;ul&gt;</h3>
            <p>Используется, когда порядок не важен (например, список покупок или навыков).</p>

            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`}</code></pre>
            </div>

            <ul className="list-disc pl-6">
                <li>&lt;ul&gt; — это контейнер для списка.</li>
                <li>&lt;li&gt; — каждый пункт списка (list item).</li>
            </ul>

            <h3 className="text-lg font-semibold text-white">Результат</h3>
            <ul className="list-disc pl-6">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>

            <h3 className="text-lg font-semibold text-white">Нумерованный список — &lt;ol&gt;</h3>
            <p>Используется, когда порядок имеет значение (например, шаги инструкции).</p>
            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<ol>
  <li>Открыть VS Code</li>
  <li>Создать файл index.html</li>
  <li>Написать структуру страницы</li>
</ol>
`}</code></pre>
            </div>
            <ul className="list-disc pl-6">
                <li>&lt;ol&gt; — это контейнер для списка.</li>
                <li>&lt;li&gt; — каждый пункт списка (list item).</li>
            </ul>
            <h3 className="text-lg font-semibold text-white">Результат</h3>
            <ol className="list-decimal pl-6">
                <li>Открыть VS Code</li>
                <li>Создать файл index.html</li>
                <li>Написать структуру страницы</li>
            </ol>

            <h2 className="text-xl font-semibold text-white"> 2. Таблицы (Tables)</h2>
            <p>Таблицы помогают структурировать данные в виде строк и столбцов.  Они полезны для отображения расписаний, ценников, сравнений и т.д.</p>

            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<table>
  <tr>
    <th>Имя</th>
    <th>Возраст</th>
  </tr>
  <tr>
    <td>Айбар</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Малика</td>
    <td>16</td>
  </tr>
</table>`}</code></pre>
            </div>
            <ul>
                <li>&lt;table&gt; — контейнер для всей таблицы.</li>
                <li>&lt;tr&gt; — строка таблицы (table row).</li>
                <li>&lt;th&gt; — заголовочная ячейка (table header), обычно выделяется жирным.</li>
                <li>&lt;td&gt; — обычная ячейка с данными (table data).</li>
            </ul>
            <h3 className="text-lg font-semibold text-white">Результат</h3>
            <div className="overflow-x-auto">
                <table>
                    <thead>
                    <tr>
                        <th>Урок</th>
                        <th>Тема</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Что такое HTML</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Основная структура</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <h3 className="text-lg font-semibold text-white">Немного стиля</h3>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] border-collapse text-sm">
                    <thead>
                        <tr>
                            <th className="border border-zinc-700 px-3 py-2 text-left bg-zinc-900">Урок</th>
                            <th className="border border-zinc-700 px-3 py-2 text-left bg-zinc-900">Тема</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-zinc-700 px-3 py-2">1</td>
                            <td className="border border-zinc-700 px-3 py-2">Что такое HTML</td>
                        </tr>
                        <tr>
                            <td className="border border-zinc-700 px-3 py-2">2</td>
                            <td className="border border-zinc-700 px-3 py-2">Основная структура</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 className="text-xl font-semibold text-white">💻 Мини-практика</h2>
            <ol className="list-decimal pl-6">
                <li>Создай новую страницу lesson4.html.</li>
                <li>
                    Добавь туда:
                    <ul className="list-disc pl-6">
                        <li>Нумерованный список «Мои цели в программировании» (3–5 пунктов).</li>
                        <li>Маркированный список «Мои любимые технологии».</li>
                        <li>Таблицу с участниками CSC (Имя, Школа, Роль).</li>
                    </ul>
                </li>
                <li>Открой страницу в браузере и посмотри, как всё выглядит.</li>
            </ol>
        </div>
    );
}