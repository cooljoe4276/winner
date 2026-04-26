export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Winner Nwaeme. All rights reserved.</p>
        <p>Building the future, one system at a time</p>
      </div>
    </footer>
  );
}
