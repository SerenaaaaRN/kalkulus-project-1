import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Solve Differential Equations"],
      typeSpeed: 40,
      showCursor: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Math watermarks */}
      <div
        className="math-symbol"
        style={{ top: "10%", left: "10%", animationDelay: "0s" }}
      >
        ∫
      </div>
      <div
        className="math-symbol"
        style={{ top: "20%", right: "15%", animationDelay: "2s" }}
      >
        ∂
      </div>
      <div
        className="math-symbol"
        style={{ bottom: "15%", left: "20%", animationDelay: "4s" }}
      >
        Σ
      </div>
      <div
        className="math-symbol"
        style={{ top: "60%", right: "10%", animationDelay: "6s" }}
      >
        ∇
      </div>
      <div
        className="math-symbol"
        style={{ bottom: "25%", right: "25%", animationDelay: "8s" }}
      >
        ∞
      </div>
      <div
        className="math-symbol"
        style={{ top: "40%", left: "15%", animationDelay: "10s" }}
      >
        π
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="floating"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Kelompok Kalkulus 1</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-2xl md:text-4xl font-semibold h-16 md:h-20 flex items-center justify-center">
              <span ref={typedRef} className="text-foreground/90" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-l text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Aplikasi berbasis website interaktif untuk menyelesaikan persamaan diferensial
            linear ordo 1 dengan visualisasi menggunakan library dari
            Python seperti SymPy, Matplotlib.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.1,
              duration: 0.5,
              type: "spring",
              bounce: 0.5,
            }}
          >
            <a href="#calculator">
              <Button
                size="lg"
                className="neon-glow text-lg px-8 py-6 rounded-xl font-semibold bg-primary hover:bg-primary/90 group"
              >
                Explore the Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
