import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#FFFFFF"; // Cor das partículas (Brancas)
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "1" : "0"; 
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // ~30FPS

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-background overflow-hidden">
      
      {/* Matrix Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
      />

      {/* Gradient Overlay para suavizar o fundo (Opcional, mantive do seu código) */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-muted/30 z-0" />

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-foreground/20 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-foreground/20 to-transparent z-10" />

      <div
        className="relative max-w-5xl w-full text-center space-y-8 z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight animate-fade-in text-foreground">
            <span
              className="inline-block animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Israel Pina
            </span>
          </h1>
          <div
            className="h-px w-24 sm:w-32 mx-auto bg-foreground/30 animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          />
          <p
            className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-light tracking-wide animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Full Stack Developer
          </p>
          <p
            className="text-sm sm:text-base md:text-lg text-foreground/60 font-light animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            Belém, PA
          </p>
        </div>

        <div
          className="flex items-center justify-center gap-3 sm:gap-4 pt-8 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <Button
            asChild
            variant="outline"
            size="icon"
            className="rounded-full border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-smooth active:scale-90 shadow-apple"
          >
            <a
              href="https://github.com/IsraelPina32"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="rounded-full border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-smooth active:scale-90 shadow-apple"
          >
             <a href="https://www.linkedin.com/in/israel-coimbra-de-pina-65b258231/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-smooth active:scale-90 shadow-apple"
          >
            <a href="mailto:israelcoimbra4142@gmail.com">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
        </div>

        <div className="pt-12 animate-fade-in" style={{ animationDelay: "1.1s" }}>
          <Button
            onClick={scrollToProjects}
            className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-foreground text-background hover:bg-foreground/90 transition-smooth active:scale-95 shadow-apple hover:shadow-luxury"
          >
            Ver Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};
