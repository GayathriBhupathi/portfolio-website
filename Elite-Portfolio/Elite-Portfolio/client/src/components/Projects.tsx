import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Cosmetics Recommendation",
    desc: "Deep learning model for analyzing skin conditions and recommending products. Migrated CNN architecture to Xception for improved accuracy.",
    tags: ["Deep Learning", "Python", "CNN", "Xception"],
    image: "/assets/project-cosmetics.png",
    link: "https://github.com/GayathriBhupathi"
  },
  {
    title: "QR Code Generator Web App",
    desc: "Dynamic web application for generating customizable QR codes in real-time. Features a responsive UI and instant download capabilities.",
    tags: ["JavaScript", "HTML/CSS", "API Integration"],
    image: "/assets/project-qrcode.png",
    link: "https://github.com/GayathriBhupathi"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black/60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              FEATURED <span className="text-accent">PROJECTS</span>
            </h2>
            <p className="text-gray-400 font-rajdhani">
              Real-world solutions built with code and data.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 border-primary text-primary hover:bg-primary/10 font-orbitron">
            <Github size={16} /> View All on GitHub
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 relative z-20 -mt-10">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/80 backdrop-blur border border-primary/30 rounded-full text-primary text-xs font-bold font-rajdhani uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 font-rajdhani mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors font-orbitron text-sm tracking-widest font-bold"
                >
                  VIEW SOURCE <ArrowRightIcon />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full gap-2 border-primary text-primary hover:bg-primary/10 font-orbitron">
            <Github size={16} /> View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  )
}
