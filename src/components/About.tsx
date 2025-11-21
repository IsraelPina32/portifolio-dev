export const About = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-brand/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Sobre
          </h2>
          <div className="h-px w-12 sm:w-16 mx-auto bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>

        <div className="space-y-6 sm:space-y-8 text-center md:text-left animate-slide-up">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
           Engenheiro de Software Fullstack focado na convergência entre alta performance e design sofisticado. Especialista em arquitetar ecossistemas digitais escaláveis, transformando requisitos complexos em aplicações robustas e intuitivas.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
            Atualmente, impulsiono a inovação na{" "}
            <span className="text-brand font-medium hover-scale inline-block cursor-pointer">
              Nord Dev
            </span>,
            orquestrando soluções que unem engenharia de precisão a uma estética refinada, garantindo excelência técnica e impacto real no usuário final.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
            Tech Stack: React, Node.js, TypeScript, AWS, Docker, UI/UX Design.
          </p>
        </div>
      </div>
    </section>
  );
};
