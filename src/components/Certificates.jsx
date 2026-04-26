import { motion } from "framer-motion";
import { certificates } from "../data";
import SectionHeading from "./SectionHeading";

export default function Certificates() {
  const featured = certificates.find((item) => item.image);
  const documents = certificates.filter((item) => item.file);

  return (
    <section id="certificates" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certificates"
          title="Recognition earned, certification in progress, and supporting documents"
          copy="This restores the certificate-related content from the old portfolio and keeps it aligned with the current React version."
        />

        {featured ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-panel grid gap-8 overflow-hidden p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8"
          >
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                {featured.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {featured.title}
              </h3>
              <p className="mt-4 text-sm leading-8 text-neutral-300">
                {featured.description}
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {documents.map((item, index) => (
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
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={item.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                >
                  View PDF
                </a>
                <a
                  href={item.file}
                  download
                  className="inline-flex items-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:border-red-500/30 hover:bg-red-500/8"
                >
                  Download PDF
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
