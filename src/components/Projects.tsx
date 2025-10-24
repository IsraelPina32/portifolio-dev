import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo, processamento de pagamentos e gestão de estoque.",
    technologies: ["React", "TypeScript", "Express.js", "SQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Sistema de análise de dados em tempo real com visualizações interativas e relatórios personalizados.",
    technologies: ["React", "Python", "Docker", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "API Microservices",
    description: "Arquitetura de microserviços escalável com containerização Docker e documentação completa.",
    technologies: ["Express.js", "Docker", "Python", "SQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile App Backend",
    description: "Backend robusto para aplicativo móvel com autenticação JWT, notificações push e sincronização offline.",
    technologies: ["Express.js", "TypeScript", "Docker", "SQL"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    github: "#",
    demo: "#",
  },
];

export const Projects = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Projetos
          </h2>
          <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-brand to-transparent" />
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Seleção de trabalhos desenvolvidos com excelência técnica e atenção aos detalhes
          </p>
        </div>

        <div className="animate-scale-in">
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-14"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!h-auto !w-[340px] sm:!w-[380px]">
                <Card className="group h-full overflow-hidden border-border/30 hover:border-navy/50 transition-dramatic rounded-3xl bg-card/90 backdrop-blur-sm shadow-apple hover:shadow-luxury">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-dramatic group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-80 transition-elegant" />
                  </div>
                  
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-navy-light transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="font-light bg-muted/50 hover:bg-navy/10 hover:text-navy-light hover:border-navy/50 transition-smooth border border-border/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 bg-muted/30 hover:bg-navy/20 hover:border-navy hover:text-navy-light transition-elegant border-muted-foreground/30"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 bg-muted/30 hover:bg-navy/20 hover:border-navy hover:text-navy-light transition-elegant border-muted-foreground/30"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center pt-8 animate-fade-in-delay">
          <p className="text-muted-foreground font-light mb-6">
            Mais projetos em desenvolvimento
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-muted/30 hover:bg-muted hover:border-muted-foreground hover-glow transition-dramatic border-muted-foreground/30"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};
