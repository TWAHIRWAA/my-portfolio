import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-cyan-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((projects, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-700"
            >
              <h3 className="text-2xl font-bold mb-4">
                {projects.title}
              </h3>

              <p className="text-gray-400">
                {projects.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}