import { motion } from "framer-motion";
import { skills } from "../data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A stack built for shipping modern products with room to scale"
          copy="The focus is not collecting tools. The focus is building a stack that can support product execution, iteration speed, and practical delivery."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="glass-panel group p-6 transition hover:-translate-y-1 hover:border-red-500/25"
            >
              <div className="mb-5 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
                {group.category}
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-neutral-200 transition group-hover:border-white/12"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
