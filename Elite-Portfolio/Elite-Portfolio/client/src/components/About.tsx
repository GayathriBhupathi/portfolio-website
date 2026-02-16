import { motion } from "framer-motion";
import { User, Award, Brain, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
              ABOUT <span className="text-primary">ME</span>
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-300 font-rajdhani text-lg leading-relaxed">
              <p>
                I am a <span className="text-accent font-bold">Computer Science student</span> specializing in Data Science, graduating in 2026. My passion lies at the intersection of AI, data analytics, and full-stack development.
              </p>
              <p>
                With a strong foundation in <span className="text-white">Python, Web Development, and Machine Learning</span>, I focus on building real-world digital solutions that solve actual problems. I've honed my skills through multiple internships and hackathons, always eager to learn the next big technology.
              </p>
              <p>
                Currently looking for opportunities as a Data Analyst, Full Stack Developer, or Entry Level Software Engineer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AboutCard 
                icon={<Brain className="w-8 h-8 text-primary" />}
                title="Problem Solver"
                desc="Analytical approach to complex challenges"
              />
              <AboutCard 
                icon={<Code className="w-8 h-8 text-accent" />}
                title="Full Stack"
                desc="End-to-end development capabilities"
              />
              <AboutCard 
                icon={<User className="w-8 h-8 text-secondary-foreground" />}
                title="Leadership"
                desc="Team collaboration & project management"
              />
              <AboutCard 
                icon={<Award className="w-8 h-8 text-neon-cyan" />}
                title="Constant Learner"
                desc="Always upskilling in AI & new tech"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-orbitron font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 font-rajdhani">{desc}</p>
    </div>
  );
}
