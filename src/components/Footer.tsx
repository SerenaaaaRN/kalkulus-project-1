import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              ∫ Kalkulus Solver
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              React-based differential equation solver dengan visualisasi
              interaktif. Project Kalkulus 2025 by Rillah.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "hero" },
                { name: "Team", id: "team" },
                { name: "Why React", id: "why" },
                { name: "Libraries", id: "libraries" },
                { name: "Material", id: "material" },
                { name: "ODE Solver", id: "calculator" },
                { name: "Goodbye", id: "outro" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.id}`}
                    className="text-foreground/70 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <motion.a
                href="https://github.com/USERNAME_KAMU"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass-card hover:bg-primary/20 flex items-center justify-center transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="mailto:duhairillahred927@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass-card hover:bg-primary/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-foreground/60 text-sm">
              duhairillahred927@gmail.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-foreground/60 text-sm flex items-center justify-center gap-2">
            Made with React, Tailwind, Python FastAPI
          </p>
          <p className="text-foreground/50 text-xs mt-2">
            © 2025 Kalkulus Solver. Presentation Project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;