import Image from "next/image"

export default function ustanovkaVSCodeTopic() {
    return (
        <div className="space-y-4 text-zinc-300 leading-7">
            <p>Теперь когда вы установили все базовые плагины для работы с VS Code, откройте приложение проводник</p>
            <Image src="/first-project1.png" alt="VS Code site" width="1000" height="500"/>
            <p>Создайте папку и назовите ее как хотите</p>
            <p>Теперь вернитесь в VS Code, и нажмите на кнопку ‘открыть папку’</p>
            <Image src="/first-project2.png" alt="VS Code site" width="1000" height="500"/>
            <p>После чего откроется окно где вам нужно будет выбрать папку которую вы только что создали</p>
            <p>После чего откроется окно где вам нужно будет выбрать папку которую вы только что создали, здесь нажмите на кнопку файла</p>
            <Image src="/first-project3.png" alt="VS Code site" width="1000" height="500"/>
            <p>Создайте и назовите файл index.html</p>
            <p>Теперь вы полностью готовы к началу пути!</p>
        </div>
    );
}