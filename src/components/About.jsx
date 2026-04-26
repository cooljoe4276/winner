import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="A young developer building toward real ownership, not just technical output"
          copy="I am driven by the practical side of technology: solving real-world problems, building products that can scale, and learning the execution discipline required to build lasting companies."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-panel p-8 md:p-10"
          >
            <div className="space-y-6 text-base leading-8 text-neutral-300">
              <p>
                My work is centered on building digital systems with commercial
                relevance and long-term scale. I am interested in the layer where
                engineering meets product strategy, business leverage, and market
                execution.
              </p>
              <p>
                I am especially interested in fintech, e-commerce, and AI because
                those sectors sit directly on top of major user needs and growth
                opportunities. I do not want to build disposable interfaces. I want
                to build platforms that compound.
              </p>
              <p>
                The long-term direction is larger than freelance work or isolated
                projects. I am building toward Unlimited Industry, a future global
                company designed to create scalable technology ecosystems with real
                impact across Africa and beyond.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="grid gap-6"
          >
            {[
              ["Product Thinking", "Build with market relevance and long-term platform value."],
              ["Technical Growth", "Expanding across frontend, backend, APIs, and secure systems."],
              ["Founder Ambition", "Preparing for company-building, not just employment."],
            ].map(([title, copy]) => (
              <div key={title} className="glass-panel p-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">{copy}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
