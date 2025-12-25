import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group relative bg-secondary/50 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20 mb-2">
            {project.category}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 font-display">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="space-y-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="text-xs text-slate-300 bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="pt-4 border-t border-white/5 flex gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-semibold"
              >
                <FaGithub className="w-5 h-5" />
                <span>View Code</span>
              </a>
            )}
            {/* Placeholder for potential live demo link if added later */}
            {/* <a href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-semibold">
              <FaExternalLinkAlt className="w-4 h-4" />
              <span>Live Demo</span>
            </a> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
