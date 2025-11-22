import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, GraduationCap } from "lucide-react";

const Outro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="outro" className="py-24 relative overflow-hidden">
      {/* Math symbols floating */}
      <div className="math-symbol" style={{ top: "15%", left: "10%", animationDelay: "1s" }}>
        ∫
      </div>
      <div className="math-symbol" style={{ top: "25%", right: "12%", animationDelay: "3s" }}>
        ∂
      </div>
      <div className="math-symbol" style={{ bottom: "20%", left: "15%", animationDelay: "5s" }}>
        Σ
      </div>
      <div className="math-symbol" style={{ bottom: "30%", right: "18%", animationDelay: "7s" }}>
        π
      </div>

      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Goodbyeeee...</span>
            </h2>
            <div className="flex justify-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Heart className="w-12 h-12 text-red-500 fill-red-500" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-12 h-12 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card rounded-3xl p-8 md:p-12 mb-8"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>

            <p className="text-xl md:text-2l text-foreground/90 leading-relaxed mb-6">
              Kami harap project ini memberikan pemahaman lebih baik dalam menyelesaikan {" "}
              <span className="text-gradient font-bold">
                Persamaan Diferensial
              </span>{" "}
            </p>

            <div className="inline-block px-6 py-3 rounded-xl bg-muted/50 border-2 border-primary/30">
              <p className="text-sm text-foreground/60 italic">
                "Mathematics is not about numbers, equations, or algorithms: <br />
                it is about understanding." - William Paul Thurston
              </p>
            </div>
          </motion.div>

          {/* Final message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-foreground">
              Semoga Bermanfaat! 🎓
            </h3>
            <p className="text-lg text-foreground/70">
              Kelompok 1 - Kalkulus 2025
            </p>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="pt-8"
            >
              <div className="text-6xl">✨</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Outro;