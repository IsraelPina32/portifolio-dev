import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, FileType, FileJson, Code, Server, Database, Container } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const technologies: { name: string; category: string; icon: LucideIcon }[] = [
  { name: "React", category: "Frontend", icon: Code2 },
  { name: "TypeScript", category: "Language", icon: FileType },
  { name: "JavaScript", category: "Language", icon: FileJson },
  { name: "Python", category: "Backend", icon: Code },
  { name: "Express.js", category: "Backend", icon: Server },
  { name: "SQL", category: "Database", icon: Database },
  { name: "Docker", category: "DevOps", icon: Container },
];

export const Technologies = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-elegant">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Tecnologias
          </h2>
          <div className="h-px w-12 sm:w-16 mx-auto bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fade-in-delay">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={index}
                className="group p-5 sm:p-6 shadow-apple hover:shadow-luxury hover:-translate-y-2 border-border/30 hover:border-foreground/30 transition-dramatic active:scale-95"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground/10 transition-smooth group-active:scale-90">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-foreground group-hover:text-foreground transition-smooth" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground transition-smooth">
                      {tech.name}
                    </h3>
                    <Badge 
                      variant="secondary" 
                      className="font-light bg-foreground/10 text-foreground/80 transition-smooth border border-foreground/20"
                    >
                      {tech.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
