import { Card } from "@/components/ui/card";
import { Building2, Briefcase, Trophy, FileText } from "lucide-react";

const experiences = [
  {
    icon: Building2,
    company: "Nord Dev",
    role: "Full Stack Developer",
    location: "Fortaleza, Ceará",
    description: "Desenvolvendo aplicações full-stack de alta performance, com foco em arquitetura escalável, experiência do usuário e melhores práticas de desenvolvimento.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind", "Express.js", "SQL", "Python", "Docker"]
  },
  {
    icon: Briefcase,
    company: "Landing Page Advocacia",
    role: "Desenvolvimento Web & Hospedagem",
    location: "Projeto Freelance",
    description: "Desenvolvimento e entrega de landing page profissional para escritório de advocacia, incluindo hospedagem e manutenção contínua.",
    technologies: ["HTML", "CSS", "JavaScript", "Hospedagem Hostinger"]
  },
  {
    icon: Trophy,
    company: "Museu Emilio",
    role: "Mini Jogo Interativo & Artigo Web Media",
    location: "Projeto com Concorrência • Rio de Janeiro",
    description: "Criação de mini jogo interativo para o Museu Emilio, desenvolvido em ambiente de concorrência, proporcionando experiência educativa e engajadora aos visitantes. Produção de artigo técnico para a Web Media.",
    technologies: ["JavaScript", "React"]
  }
];

export const Experience = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-brand/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Experiência
          </h2>
          <div className="h-px w-12 sm:w-16 mx-auto bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card 
                key={index}
                className="p-6 sm:p-8 shadow-card hover:shadow-glow hover-lift hover-glow animate-slide-up border-border/50 hover:border-brand/50 transition-dramatic group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="p-3 rounded-full bg-brand/10 hover-scale group-hover:bg-brand/20 transition-smooth">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-brand group-hover:text-brand-light transition-smooth" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-brand transition-smooth">
                        {exp.company}
                      </h3>
                      <p className="text-base sm:text-lg text-brand font-light">
                        {exp.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-brand/50 transition-smooth" />

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                    {exp.description}
                  </p>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs sm:text-sm bg-muted/50 text-muted-foreground rounded-full border border-border/50 hover:border-brand/50 hover:text-brand transition-smooth"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
