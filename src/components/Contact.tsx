import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-subtle relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-brand/5 rounded-full blur-3xl -z-10 animate-pulse-subtle" />

      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 text-center">
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Contato
          </h2>
          <div className="h-px w-12 sm:w-16 mx-auto bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto animate-slide-up">
          Interessado em colaborar ou discutir um projeto? Entre em contato.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-8 animate-fade-in-delay">
          <Button 
            className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-brand hover:bg-brand-dark hover:shadow-brand transition-elegant"
          >
            <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Email
          </Button>
          <Button 
            variant="outline" 
            className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base hover:border-brand hover:text-brand hover:shadow-card transition-elegant"
          >
            <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base hover:border-brand hover:text-brand hover:shadow-card transition-elegant"
          >
            <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};
