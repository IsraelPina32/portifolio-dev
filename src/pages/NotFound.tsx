import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
 
  const [glitchActive, setGlitchActive] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');
    
    const fontSize = 16;
    const columns = width / fontSize;
   
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1; 
    }

    const draw = () => {

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#FF2800'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        if (Math.random() > 0.98) {
             ctx.fillStyle = '#FFFFFF'; 
        } else {
             ctx.fillStyle = '#FF2800';
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // ~30FPS

    const handleResize = () => {
        if (canvas) {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  // Efeito de Glitch aleatório no título 404
  useEffect(() => {
      const glitchInterval = setInterval(() => {
          setGlitchActive(true);
          setTimeout(() => setGlitchActive(false), 200);
      }, 3000);
      return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden font-mono">
      {/* Canvas Background - Matrix Vermelho */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0 opacity-80"
      />

      {/* Overlay Vignette */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-[radial-gradient(circle,transparent_20%,#000000_100%)] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-20 text-center p-8 border border-[#FF2800] bg-black/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,40,0,0.5)] max-w-lg w-full rounded-3xl">
        
        {/* Header - Glitch Text */}
        <h1 className={`text-8xl font-black text-white mb-4 tracking-tighter ${glitchActive ? 'animate-pulse translate-x-1' : ''}`}
            style={{ textShadow: '4px 4px 0px #FF2800' }}>
          404
        </h1>

        <div className="h-1 w-full bg-[#FF2800] my-6 shadow-[0_0_10px_#FF2800]"></div>

        <p className="text-[#FF2800] text-xl mb-2 font-bold uppercase tracking-widest">
          SYSTEM FAILURE
        </p>
        
        <p className="text-gray-300 mb-8 text-sm px-4">
          A rota <span className="text-white bg-[#FF2800]/20 px-1 border border-[#FF2800]/50 rounded text-xs break-all font-mono inline-block align-middle max-w-full">{location.pathname === '/' ? '/unknown-sector' : location.pathname}</span> não existe nesta realidade.
        </p>

        {/* Cyberpunk Button */}
        <button 
          onClick={() => navigate('/')}
          className="group relative px-8 py-3 bg-transparent text-white font-bold uppercase tracking-wider overflow-hidden border border-white hover:border-[#FF2800] transition-colors duration-300 rounded-xl"
        >
          <span className="relative z-10 group-hover:text-[#FF2800] transition-colors duration-300">
            Retornar à Base
          </span>
          
          {/* Hover Fill Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out mix-blend-difference rounded-xl"></div>
          
          {/* Button Glow */}
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF2800] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#FF2800] rounded-full"></div>
        </button>
      </div>

      {/* Scanline Effect */}
      <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
    </div>
  );
};

export default NotFound;