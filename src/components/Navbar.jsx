import { motion } from "framer-motion";

export default function Navbar({ items }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/6 bg-black/35 backdrop-blur-xl"
    >
      <div className="section-shell flex items-center justify-between py-4">
        <a
          href="#top"
          className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.26em] text-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400 shadow-glow">
            WN
          </span>
          WINNER NWAEME
        </a>

        <nav className="hidden gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
