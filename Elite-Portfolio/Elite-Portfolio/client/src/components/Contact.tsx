import { motion } from "framer-motion";
import { Mail, Phone, Send, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_k41vmqb",
        "template_lzjb652",
        form.current,
        "vcUaT6q05EfMk4Bb7"
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          form.current?.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
              LET'S <span className="text-primary">CONNECT</span>
            </h2>
            <p className="text-gray-400 font-rajdhani text-lg mb-8 leading-relaxed">
              I'm currently looking for internships and full-time opportunities in Data Science and Web Development. Have a project in mind or just want to say hi? Drop me a message!
            </p>

            <div className="space-y-6">
              <ContactItem 
                icon={<Mail className="w-6 h-6 text-accent" />} 
                label="Email" 
                value="bhupathigarigayathri707@gmail.com"
                href="mailto:bhupathigarigayathri707@gmail.com" 
              />
              <ContactItem 
                icon={<Phone className="w-6 h-6 text-accent" />} 
                label="Phone" 
                value="+91 70933 00841"
                href="tel:+917093300841" 
              />
              <ContactItem 
                icon={<Linkedin className="w-6 h-6 text-accent" />} 
                label="LinkedIn" 
                value="Connect on LinkedIn"
                href="https://www.linkedin.com/in/gayathri-bhupathi-a08b6b261" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-rajdhani text-gray-400">Name</label>
                  <Input name="user_name" required placeholder="John Doe" className="bg-black/40 border-white/10 focus:border-primary text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-rajdhani text-gray-400">Email</label>
                  <Input name="user_email" type="email" required placeholder="john@example.com" className="bg-black/40 border-white/10 focus:border-primary text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-rajdhani text-gray-400">Subject</label>
                <Input name="subject" required placeholder="Project Inquiry" className="bg-black/40 border-white/10 focus:border-primary text-white" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-rajdhani text-gray-400">Message</label>
                <Textarea name="message" required placeholder="Tell me about your project..." className="bg-black/40 border-white/10 focus:border-primary text-white min-h-[120px]" />
              </div>

              <Button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold font-orbitron tracking-widest py-6"
              >
                {isSending ? "SENDING..." : "SEND MESSAGE"} <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/5">
      <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-sm text-gray-400 font-rajdhani">{label}</h4>
        <p className="text-white font-rajdhani font-semibold group-hover:text-primary transition-colors">{value}</p>
      </div>
    </a>
  );
}
