export default function formyIKnopkiTopic() {
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
                Сегодня вы узнаете о том как составлять формы в HTML и впервые поработаете с интерактивом, а не только статической картинкой
            </p>

            <h2 className="text-xl font-semibold text-white">1. Что такое форма в HTML</h2>
            <p>Форма (&lt;form&gt;) — это контейнер для полей, куда пользователь вводит данные (текст, email, пароль и т.д.), и для кнопок, которые отправляют или очищают данные.</p>

            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<form action="/submit" method="POST">
  <label for="username">Имя пользователя:</label>
  <input type="text" id="username" name="username" placeholder="Введите имя" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="example@mail.com" required>

  <button type="submit">Отправить</button>
</form>`}</code></pre>
            </div>

            <h3 className="text-lg font-semibold text-white">💡 Важно:</h3>
            <p>action — куда отправляются данные (можно оставить пустым на стадии макета); <br/>
                method — способ передачи данных (GET или POST); <br/>
                name — ключ, под которым данные передаются; <br/>
                required — делает поле обязательным.</p>

            <ul className="list-disc pl-6">
                <li>&lt;ul&gt; — это контейнер для списка.</li>
                <li>&lt;li&gt; — каждый пункт списка (list item).</li>
            </ul>

            <h2 className="text-xl font-semibold text-white">🔤 2. Основные типы &lt;input&gt;</h2>
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Тип</th>
                        <th className="text-left p-3 font-semibold">Назначение</th>
                        <th className="text-left p-3 font-semibold">Пример</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                        <td className="p-3"><code>text</code></td>
                        <td className="p-3">обычный текст</td>
                        <td className="p-3">Имя</td>
                        </tr>
                        <tr className="border-b">
                        <td className="p-3"><code>email</code></td>
                        <td className="p-3">email с валидацией</td>
                        <td className="p-3"><a href="mailto:example@mail.com" className="text-green-800 font-semibold underline">example@mail.com</a></td>
                        </tr>
                        <tr className="border-b">
                        <td className="p-3"><code>password</code></td>
                        <td className="p-3">скрытый ввод</td>
                        <td className="p-3">******</td>
                        </tr>
                        <tr className="border-b">
                        <td className="p-3"><code>number</code></td>
                        <td className="p-3">числа</td>
                        <td className="p-3">1, 2, 3</td>
                        </tr>
                        <tr className="border-b">
                        <td className="p-3"><code>checkbox</code></td>
                        <td className="p-3">флажок</td>
                        <td className="p-3">☑ Я согласен</td>
                        </tr>
                        <tr className="border-b">
                        <td className="p-3"><code>radio</code></td>
                        <td className="p-3">выбор одного варианта</td>
                        <td className="p-3">○ Муж ○ Жен</td>
                        </tr>
                        <tr className="border-b">
                        <td className="p-3"><code>submit</code></td>
                        <td className="p-3">кнопка отправки</td>
                        <td className="p-3">Отправить</td>
                        </tr>
                        <tr>
                        <td className="p-3"><code>file</code></td>
                        <td className="p-3">загрузка файла</td>
                        <td className="p-3">Выбрать файл</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 className="text-xl font-semibold text-white">🎨 3. Кнопки (&lt;button&gt;)</h2>
            <p>Кнопка — это элемент, на который пользователь нажимает, чтобы что-то произошло: отправить форму, очистить поля, перейти на другую страницу и т.п.</p>

            <div className="bg-[#141414] text-gray-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-sm text-gray-300 mb-3">html</div>
                <pre className="whitespace-pre bg-transparent m-0 p-0"><code>{`<button type="button">Просто кнопка</button>
<button type="submit">Отправить форму</button>
<button type="reset">Очистить форму</button>`}</code></pre>
            </div>

            <h3 className="text-white font-semibold text-lg">💡 Советы по дизайну кнопок:</h3>
            <ul className="list-disc pl-6">
                <li>Используй чёткий контраст цвета текста и фона;</li>
                <li>Добавляй hover-эффект для интерактивности;</li>
                <li>Делай кнопку закруглённой и с паддингом для аккуратного вида.</li>
            </ul>
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Тип</th>
                        <th className="text-left p-3 font-semibold">Описание</th>
                        <th className="text-left p-3 font-semibold">Пример</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                        <td className="p-3"><code>button</code></td>
                        <td className="p-3">обычная кнопка (ничего не делает без JS)</td>
                        <td className="p-3"><code>&lt;button type=&ldquo;button&ldquo;&gt;Click&lt;/button&gt;</code></td>
                        </tr>
                        <tr className="border-b">
                        <td className="p-3"><code>submit</code></td>
                        <td className="p-3">отправляет форму</td>
                        <td className="p-3"><code>&lt;button type=&ldquo;submit&ldquo;&gt;Отправить&lt;/button&gt;</code></td>
                        </tr>
                        <tr>
                        <td className="p-3"><code>reset</code></td>
                        <td className="p-3">очищает все поля формы</td>
                        <td className="p-3"><code>&lt;button type=&ldquo;reset&ldquo;&gt;Очистить&lt;/button&gt;</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 className="text-xl text-white font-semibold">💻 Мини-практика</h2>
            <p>Создайте форму регистрации с тремя полями:</p>
            <ul className="list-disc pl-6">
                <li>Имя</li>
                <li>Email</li>
                <li>Пароль</li>
            </ul>
            <p>Добавьте кнопку отправки формы с текстом &#34;Зарегистрироваться&#34;.</p>
            <h3 className="text-lg text-white font-semibold">💡 Бонус-задание (по желанию): добавить кнопку Очистить (type=&#34;reset&#34;).</h3>
        </div>
    );
}