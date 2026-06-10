import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "MongoDB", level: 88 },
  { name: "MySQL", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "HTML/CSS", level: 95 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-slate-800 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 bg-cyan-400 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}