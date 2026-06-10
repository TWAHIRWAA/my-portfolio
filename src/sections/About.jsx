import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-10 text-cyan-400"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <p className="text-lg text-gray-300 leading-8">
              I am TWAHIRWA Samuel, a Full-Stack Software
              Developer with over 7 years of experience
              building web applications and enterprise
              systems.
            </p>

            <p className="text-lg text-gray-300 leading-8 mt-4">
              Founder of DUTUME GROUP LTD, helping
              organizations and businesses digitize
              operations through modern software
              solutions.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Quick Facts
            </h3>

            <ul className="space-y-3">
              <li>✓ 7+ Years Experience</li>
              <li>✓ 30+ Projects Completed</li>
              <li>✓ React.js Expert</li>
              <li>✓ Node.js Developer</li>
              <li>✓ MongoDB & MySQL</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}