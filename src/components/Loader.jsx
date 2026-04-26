import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ active }) {
  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="h-16 w-16 rounded-full border border-white/10 border-t-red-500"
            />
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              Loading
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
