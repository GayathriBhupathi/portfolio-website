import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-screen"
        style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-rajdhani font-bold tracking-[0.2em] mb-6 backdrop-blur-md">
            HELLO_WORLD
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron mb-6 leading-tight">
            <span className="text-white">GAYATHRI</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent animate-pulse">
              BHUPATHI
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 font-rajdhani max-w-2xl mx-auto mb-8 tracking-wide">
            Data Analyst | Full Stack Developer | <span className="text-accent">AI Enthusiast</span>
          </h2>
          
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            Turning data into insights and building scalable digital experiences with code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-black font-bold font-orbitron tracking-wide min-w-[160px]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW PROJECTS
            </Button>
            <a href="/resume.pdf" download="Gayathri_Bhupathi_Resume.pdf">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent/10 font-bold font-orbitron tracking-wide min-w-[160px]"
              >
                <Download className="mr-2 h-4 w-4" /> RESUME
              </Button>
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <SocialLink href="https://github.com/GayathriBhupathi" icon={<Github />} />
            <SocialLink href="https://www.linkedin.com/in/gayathri-bhupathi-a08b6b261" icon={<Linkedin />} />
            <SocialLink href="mailto:bhupathigarigayathri707@gmail.com" icon={<Mail />} />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs font-orbitron tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
    >
      {icon}
    </a>
  );
}
