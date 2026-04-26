import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Vision() {
  return (
    <section id="vision" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="My Vision"
          title="Unlimited Industry is the long game"
          copy="The ambition is to build a global technology ecosystem that starts with real execution, real systems, and real commercial relevance."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="glass-panel relative overflow-hidden p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-white/5" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="max-w-3xl text-lg leading-9 text-neutral-200 md:text-xl">
                My long-term objective is to build Unlimited Industry into a
                global technology ecosystem capable of launching scalable
                solutions across fintech, e-commerce, and high-value digital
                infrastructure. The goal is not small visibility. The goal is
                durable leverage and measurable impact.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Build products that solve large-market problems",
                "Create systems that can scale across borders",
                "Impact millions through strong digital execution",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/35 p-5 text-sm leading-7 text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
