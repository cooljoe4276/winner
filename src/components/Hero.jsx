import { motion } from "framer-motion";

const glowVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.28, 0.45, 0.28],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-20" />
      <motion.div
        variants={glowVariants}
        animate="animate"
        className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl"
      />
      <div className="section-shell relative py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-red-400"
            >
              Full-Stack Developer | Future Founder
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl"
            >
              Winner Nwaeme
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-5 max-w-3xl text-xl font-medium text-neutral-200 md:text-2xl"
            >
              Building scalable digital platforms for Africa
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg"
            >
              Full-Stack Developer and future founder of a global tech ecosystem,
              focused on building systems that scale across fintech, e-commerce,
              and emerging digital infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-red-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-red-500/30 hover:bg-red-500/8"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-panel relative overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-white/5" />
            <div className="relative space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Mission
                </p>
                <p className="mt-3 text-2xl font-semibold leading-snug text-white">
                  Building scalable digital platforms for Africa and beyond
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Stack", "React / APIs / Node.js"],
                  ["Focus", "Products with real market value"],
                  ["Vision", "Unlimited Industry"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                      {label}
                    </p>
                    <p className="mt-3 text-sm font-medium leading-6 text-neutral-200">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
