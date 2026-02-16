export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold font-orbitron text-white">
            Gayathri <span className="text-primary">Bhupathi</span>
          </h3>
          <p className="text-xs text-gray-500 font-rajdhani mt-1">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        
        <p className="text-sm text-gray-400 font-rajdhani">
          Built with <span className="text-accent">Replit Agent</span>. Styled with <span className="text-primary">Neon Dreams</span>.
        </p>
      </div>
    </footer>
  );
}
