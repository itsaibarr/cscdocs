import Link from "next/link"
import Image from "next/image"

export default function ustanovkaVSCodeTopic() {
    return (
        <div className="space-y-4 text-zinc-300 leading-7">
            <p>Перейдите на сайт официальный сайт <Link href={"https://code.visualstudio.com/"} className="text-green-800 font-semibold underline">VS Code</Link></p>
            <p>Нажмите на кнопку Download</p>
            <Image src="/vscode-install1.png" alt="VS Code site" width="1000" height="500"/>
            <p>Выберите тип вашего устройства</p>
            <Image src="/vscode-install2.png" alt="VS Code site" width="1000" height="500"/>
            <p>Когда вы перейдёте по ссылке, откроется страница с благодарностью за скачивание, а сам файл начнёт загружаться автоматически сверху</p>
            <Image src="/vscode-install3.png" alt="VS Code site" width="1000" height="500"/>
            <p>Далее следуйте инструкций по установке</p>
        </div>
    );
}