import { motion } from "framer-motion";
import { BlockMath } from "react-katex";
import { CheckCircle2 } from "lucide-react";
import { ODEStep } from "@/services/odeApi"; // Import tipe data dari API service

interface ODEStepsProps {
  steps: ODEStep[]; // Sekarang hanya menerima array steps
}

const ODESteps = ({ steps }: ODEStepsProps) => {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-foreground/70">{step.description}</p>
            </div>
          </div>
          
          <div className="bg-muted/30 rounded-xl p-6 overflow-x-auto">
            <div className="text-center">
              <BlockMath math={step.latex} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ODESteps;