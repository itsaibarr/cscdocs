export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-zinc-400">
        <div className="flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" className="hover:text-white transition-colors" rel="noreferrer">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Политика
          </a>
        </div>
        <div>Made by CSC</div>
      </div>
    </footer>
  );
}
