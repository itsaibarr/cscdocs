export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="mx-auto flex max-w-3xl items-center justify-between py-6 text-sm text-zinc-400">
        <div className="flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" className="hover:text-white transition-colors" rel="noreferrer">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Github
          </a>
        </div>
        <div>Made by CSC</div>
      </div>
    </footer>
  );
}
