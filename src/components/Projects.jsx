import { motion } from "framer-motion";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Projects positioned as product systems, not classroom placeholders"
          copy="These project cards are structured to communicate product direction, implementation thinking, and technical range. Replace the placeholder links with your exact production URLs where needed."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="glass-panel group relative overflow-hidden p-7 transition hover:-translate-y-1 hover:border-red-500/25"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-red-400">
                  Featured Build
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:border-red-500/30 hover:bg-red-500/8"
                >
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
