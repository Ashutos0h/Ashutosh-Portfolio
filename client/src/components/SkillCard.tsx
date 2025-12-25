import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaServer, FaEye, FaTools } from "react-icons/fa";
import { SiNvidia, SiPython, SiDocker, SiTensorflow } from "react-icons/si";

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

const getIcon = (category: string) => {
  if (category.includes("Infrastructure")) return <SiNvidia className="w-8 h-8 text-primary" />;
  if (category.includes("Vision")) return <FaEye className="w-8 h-8 text-primary" />;
  return <FaTools className="w-8 h-8 text-primary" />;
};

export function SkillCard({ category, items, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-card border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
          {getIcon(category)}
        </div>
        <h3 className="text-xl font-bold text-white font-display">{category}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span 
            key={idx}
            className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary/20 border border-primary/30 rounded-full hover:bg-primary/30 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
