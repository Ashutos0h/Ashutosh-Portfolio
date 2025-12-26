import { motion } from "framer-motion";
import { Link } from "wouter";
import { useSkills, useProjects } from "@/hooks/use-portfolio";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaDownload, FaChevronDown } from "react-icons/fa";
import { SiNvidia } from "react-icons/si";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-30" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for work
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold font-display mb-6 tracking-tight"
            >
              Ashutosh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-white">Verma</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              AI Developer specializing in the <span className="text-white font-semibold">NVIDIA AI Stack</span> and <span className="text-white font-semibold">Production-Grade Deployment</span>. Building the future of intelligent infrastructure.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <Button 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-8 py-6 rounded-xl font-semibold bg-primary text-black hover:bg-primary/90 text-base shadow-[0_0_20px_rgba(118,185,0,0.3)] hover:shadow-[0_0_30px_rgba(118,185,0,0.5)] transition-all"
              >
                View Projects
              </Button>
              <a 
                href="/Ashutosh_Verma_Resume_1766695547214.pdf" 
                download
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 rounded-xl font-semibold border-white/20 bg-transparent text-white hover:bg-white/10 text-base"
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center justify-center md:justify-start gap-6 text-muted-foreground"
            >
              <a href="https://github.com/Ashutos0h" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ashutosh-verma04/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <div className="h-4 w-[1px] bg-white/20 mx-2" />
              <div className="flex items-center gap-2 text-sm font-medium">
                <SiNvidia className="w-5 h-5 text-primary" />
                <span>NVIDIA Certified</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative hidden md:block"
          >
             {/* Tech Sphere Visual Representation */}
             <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
                <div className="relative z-10 w-full h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden group hover:border-primary/30 transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-xs text-primary">
                    SYSTEM_STATUS: ONLINE
                  </div>
                  
                  {/* Code snippet decoration */}
                  <div className="font-mono text-sm text-slate-400 space-y-1 mt-8">
                    <div className="text-purple-400">import <span className="text-white">torch</span></div>
                    <div className="text-purple-400">import <span className="text-white">tensorrt</span> as <span className="text-white">trt</span></div>
                    <div className="text-green-400 mt-2"># Initialize Inference Engine</div>
                    <div><span className="text-blue-400">class</span> <span className="text-yellow-400">NVIDIA_Engine</span>:</div>
                    <div className="pl-4">def __init__(self):</div>
                    <div className="pl-8 text-slate-500">self.device = "cuda:0"</div>
                    <div className="pl-8 text-slate-500">self.precision = "fp16"</div>
                    <div className="pl-4 mt-2"><span className="text-purple-400">return</span> <span className="text-green-300">"Ready for Deployment"</span></div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">GPU Util</div>
                      <div className="text-xl font-bold text-white font-mono">98%</div>
                      <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[98%]" />
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Inference</div>
                      <div className="text-xl font-bold text-white font-mono">12ms</div>
                      <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                        <div className="bg-blue-400 h-full w-[85%]" />
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 cursor-pointer hover:text-white/80 transition-colors"
          onClick={() => scrollToSection('tech-stack')}
        >
          <FaChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* ================= TECH STACK SECTION ================= */}
      <section id="tech-stack" className="py-24 relative bg-black/20">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            title="Specialized Tech Stack" 
            subtitle="Expertise in high-performance computing and AI pipeline orchestration"
            centered
          />
          
          {skillsLoading ? (
            <div className="text-center text-muted-foreground">Loading skills...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {skills?.map((skill, index) => (
                <SkillCard 
                  key={skill.id} 
                  category={skill.category} 
                  items={skill.items} 
                  index={index} 
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= PROJECT GALLERY ================= */}
      <section id="projects" className="py-24 bg-secondary/10 border-y border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Production-ready AI solutions deployed on enterprise infrastructure"
          />
          
          {projectsLoading ? (
            <div className="text-center text-muted-foreground">Loading projects...</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects?.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= EDUCATION & CERTIFICATIONS ================= */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <SectionHeading title="Education" className="mb-8" />
              
              <div className="relative pl-8 border-l border-white/10 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <h3 className="text-xl font-bold text-white mb-1">Bachelor of Technology (B.Tech)</h3>
                  <p className="text-primary font-mono text-sm mb-2">2023 - 2027</p>
                  <p className="text-lg text-slate-300">ABESIT, Ghaziabad</p>
                  <p className="text-muted-foreground mt-2">Computer Science & Engineering (AI)</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <SectionHeading title="Certifications" className="mb-8" />
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/30 transition-all cursor-default"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">NVIDIA GPU Platforms Training</h3>
                    <SiNvidia className="text-primary w-6 h-6" />
                  </div>
                  <p className="text-sm text-primary mb-2">GRIL Training (40 Hours)</p>
                  <p className="text-muted-foreground text-sm">
                    Hands-on training with NVIDIA Triton Inference Server, Jetson Nano, and DGX Systems optimization.
                  </p>
                </motion.div>
                
                {/* Additional placeholders for future certs */}
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/30 transition-all cursor-default opacity-60"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">Deep Learning Specialization</h3>
                    <div className="w-6 h-6 rounded-full bg-white/10" />
                  </div>
                  <p className="text-sm text-primary mb-2">In Progress</p>
                  <p className="text-muted-foreground text-sm">
                    Advanced neural network architectures and deployment strategies.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-24 relative bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Let's Collaborate" 
                subtitle="Interested in building high-performance AI systems? Let's connect."
              />
              
              <div className="space-y-8 mt-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/ashutosh-verma04/" className="text-muted-foreground hover:text-primary transition-colors">linkedin.com/in/ashutosh-verma</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">GitHub</h4>
                    <a href="https://github.com/Ashutos0h" className="text-muted-foreground hover:text-primary transition-colors">github.com/ashutosh-verma</a>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 bg-black border-t border-white/10 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ashutosh Verma • Built with <span className="text-red-500">♥</span> 
    
        </p>
      </footer>
    </div>
  );
}
