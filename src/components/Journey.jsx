import { motion } from "framer-motion";
import { journey } from "../data";
import SectionHeading from "./SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Journey"
          title="Education, work experience, and the direction behind the code"
          copy="This section carries forward the personal context from the earlier portfolio version so the site presents more than isolated technical output."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {journey.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="glass-panel p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                {item.label}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-400">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
