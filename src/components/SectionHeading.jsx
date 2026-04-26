import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-red-400">
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy mt-5">{copy}</p> : null}
    </motion.div>
  );
}
