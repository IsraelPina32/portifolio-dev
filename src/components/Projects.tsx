import { useState,  MouseEvent } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

import sistemaNotasImage from '@/assets/images/sistema-notas.png'
import cadeado from '@/assets/images/cadeado.png'
import pokedex from '@/assets/images/pokedex.png'

type Project = {
  id: number;
  title: string;
  description: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Outros";
  technologies: string[];
  image: string;
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Notas",
    description: "Plataforma completa para gestão de conhecimento e anotações rápidas.",
    category: "Full Stack",
    technologies: ["Vue.js", "Tailwind"],
    image: sistemaNotasImage,
    github: "https://github.com/IsraelPina32/Sistema-Notas",
    demo: "https://sistema-notas-rosy.vercel.app/",
  },
  {
    id: 2,
    title: "Mini Game Museu",
    description: "Experiência gamificada educativa para o Museu Emílio Goeldi.",
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "Figma"],
    image: cadeado,
    github: "https://github.com/IsraelPina32/museu-emilio-goeldi",
    demo: "#",
  },
  {
    id: 3,
    title: "Pokedex",
    description: "Dashboard financeiro com gráficos em tempo real.",
    category: "Frontend",
    technologies: ["React", "TypeScript", "PostgreSQL"],
    image: pokedex,
    github: "https://github.com/IsraelPina32/quest-pokedex",
    demo: "https://quest-pokedex-five.vercel.app/",
  },
   {
    id: 4,
    title: "Andamento...",
    description: "Carregando...",
    category: "Outros",
    technologies: ["Secret", "Secret"],
    image: cadeado,
    github: "#",
    demo: "#",
  },
];

const categories = ["Todos", "Full Stack", "Frontend", "Backend", "Outros"];

function ProjectCard({ project }: { project: Project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative border border-white/10 bg-gray-900/50 overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
    >

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
         <img 
                src={project.image} 
                alt={project.title} 
                className="w-[100%] h-[100%] object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1 z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
            <Badge className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border-white/10 z-20">
                {project.category}
            </Badge>
        </div>

        <div className="flex flex-col flex-grow p-6 space-y-4">
            <div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-white/10 text-gray-300 bg-white/5">
                        {tech}
                    </Badge>
                ))}
            </div>

            <div className="mt-auto pt-4 flex items-center gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full border-white/10 bg-white/5 hover:bg-white/20 hover:text-white transition-colors">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                    </Button>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="w-full bg-white text-black hover:bg-gray-200 transition-colors">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                    </Button>
                </a>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = projects.filter(project => 
    activeCategory === "Todos" ? true : project.category === activeCategory
  );

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand/10 rounded-[100%] blur-[100px] -z-10 pointer-events-none" />
       <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Projetos Selecionados
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore uma coleção de aplicações desenvolvidas com foco em performance e experiência do usuário.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === category
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500">
                Nenhum projeto encontrado nesta categoria.
            </div>
        )}

        <div className="text-center pt-12">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <a href="https://github.com/IsraelPina32?tab=repositories" target="_blank" rel="noopener noreferrer">
                Ver repositório completo no GitHub 
              </a>
              <Github className="ml-2 h-4 w-4"/>
            </Button>
        </div>

      </div>
    </section>
  );
};