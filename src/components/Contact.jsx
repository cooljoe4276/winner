import { motion } from "framer-motion";
import { socialLinks } from "../data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Open to serious collaboration, product work, and strategic opportunities"
          copy="The form is wired for static hosting with Netlify-compatible markup. Portfolio documents and certificate downloads are also linked here."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            name="contact"
            method="POST"
            data-netlify="true"
            className="glass-panel p-7 md:p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-neutral-300">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-red-500/40"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-neutral-300">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-red-500/40"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm text-neutral-300">Message</span>
              <textarea
                name="message"
                rows="6"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-red-500/40"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="glass-panel p-7 md:p-8"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-red-400">
              Direct Contact
            </p>
            <div className="mt-5 space-y-4">
              <a
                href="mailto:nwaemewinner@gmail.com"
                className="block text-lg font-medium text-white transition hover:text-red-300"
              >
                nwaemewinner@gmail.com
              </a>
              <a
                href="tel:+2347018276346"
                className="block text-lg font-medium text-white transition hover:text-red-300"
              >
                +234 701 827 6346
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:border-red-500/30 hover:bg-red-500/8"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
