import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experience = [
  {
    role: "Android Developer Intern",
    company: "EduSkills Foundation",
    period: "Virtual",
    desc: "Developed Android apps using Java/Kotlin. Designed responsive UI and optimized performance."
  },
  {
    role: "Web Dev Intern",
    company: "Prodigy InfoTech",
    period: "Remote",
    desc: "Designed and deployed responsive websites using HTML, CSS, JS. Improved cross-browser compatibility."
  },
  {
    role: "Web Dev Intern",
    company: "Cognifiz Technologies",
    period: "Remote",
    desc: "Built dynamic web interfaces following modern UI/UX standards. Integrated frontend with backend."
  },
  {
    role: "Salesforce Virtual Intern",
    company: "Salesforce Program",
    period: "Remote",
    desc: "Configured CRM modules, analyzed customer workflows, and managed data reporting."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-16 text-center">
          MY <span className="text-primary">JOURNEY</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-accent/50 to-transparent md:-translate-x-1/2 ml-4 md:ml-0"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Spacer for other side */}
              <div className="hidden md:block flex-1"></div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary z-10 md:-translate-x-1/2 ml-[9px] md:ml-0 shadow-[0_0_10px_var(--color-primary)]"></div>

              {/* Card */}
              <div className="flex-1 w-full md:w-auto pl-12 md:pl-0">
                <div className={`glass-card p-6 rounded-xl border-l-4 ${index % 2 === 0 ? "md:border-l-0 md:border-r-4 border-primary" : "border-accent"} relative`}>
                  <div className="flex items-center gap-2 text-primary text-sm font-rajdhani font-bold mb-2">
                    <Briefcase size={14} />
                    {exp.company}
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-4 font-mono">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                  <p className="text-gray-300 font-rajdhani text-sm">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
