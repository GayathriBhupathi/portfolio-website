import { motion } from "framer-motion";

const skills = {
  "Programming": ["Python", "C (Basic)", "Java", "SQL"],
  "Web Development": ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Node.js"],
  "Tools & Platforms": ["VS Code", "Git & GitHub", "MongoDB Atlas", "Salesforce", "Android Studio"],
  "Domains": ["Data Analysis", "Web Development", "Android Development", "AI / ML Fundamentals"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            TECHNICAL <span className="text-accent">ARSENAL</span>
          </h2>
          <p className="text-gray-400 font-rajdhani max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <h3 className="text-xl font-orbitron font-bold text-white mb-6 flex items-center gap-2">
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm font-rajdhani font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
