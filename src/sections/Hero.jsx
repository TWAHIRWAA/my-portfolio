import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>

      <div className="text-center z-10 px-4">

        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold"
        >
          TWAHIRWA
          <span className="text-cyan-400"> Samuel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-300"
        >
          Full-Stack Developer | Founder of DUTUME GROUP LTD
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl">
            Hire Me
          </button>

          <button className="border border-cyan-500 px-8 py-3 rounded-xl">
            View Projects
          </button>
        </motion.div>

      </div>
    </section>
  );

  <a
  href="/cv.pdf"
  download
  className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl"
>
  Download CV
</a>
}