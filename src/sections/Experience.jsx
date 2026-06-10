const experiences = [
  {
    year: "2025 - Present",
    role: "Founder & Chairperson",
    company: "DUTUME GROUP LTD",
  },
  {
    year: "2023 - 2025",
    role: "Full Stack Developer",
    company: "Various Projects",
  },
  {
    year: "2018 - 2023",
    role: "Software Developer",
    company: "Tech Industry",
  },
];

export default function Experience() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-cyan-400 mb-10">
          Experience
        </h2>

        <div className="border-l-2 border-cyan-400 pl-8">

          {experiences.map((exp, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-xl font-bold">
                {exp.role}
              </h3>

              <p className="text-cyan-400">
                {exp.company}
              </p>

              <span className="text-gray-400">
                {exp.year}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}