import { useTranslation } from 'react-i18next';
import { FaFilePdf, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import { useState, type MouseEvent } from 'react';

export function Hero() {
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        
        setMousePosition({
            x: clientX - left,
            y: clientY - top,
        });
    };

    return (
        <section 
            id="home" 
            className="relative w-full min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-20 overflow-hidden group"
            onMouseMove={handleMouseMove}
        >
            
            <div className="absolute inset-0 z-0 bg-[url('/fundo-hero.jpg')] bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 z-0 bg-gray-950/85"></div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-0"></div>

            <div 
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 57, 116, 0.10), transparent 80%)`
                }}
            ></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* Left Side */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 order-2 md:order-1">
                    <p className="text-gray-400 font-mono">
                        {t('hero.greeting')}
                    </p>
                    
                    <h1 
                        className="text-5xl md:text-7xl font-bold text-gray-100 tracking-wide italic"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {t('hero.name')}
                    </h1>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mt-2 mb-4 leading-snug">
                        {t('hero.subtitle')}
                    </h2>
                    
                    <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed mb-6">
                        {t('hero.description')}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a 
                            href="/Donathan_Goncalves_Software_PT.pdf"
                            // href="/Donathan_Goncalves_Software_PT.pdf"
                            target="_blank"
                            className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors text-center shadow-md shadow-blue-500/20"
                        >
                            {t('hero.ctaResume')} <FaFilePdf className="text-lg" />
                        </a>
                        <a 
                            href="#projects" 
                            className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium rounded transition-colors text-center"
                        >
                            {t('hero.ctaProjects')} <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>

                {/* Photo */}
                <div className="flex-1 flex items-center justify-center md:justify-end w-full h-full order-1 md:order-2">
                    <div className="relative">
                        <img 
                            src="/Donathan.jpg"
                            alt="Donathan R. Gonçalves"
                            className="w-48 md:w-full md:max-w-sm aspect-square object-cover rounded-full shadow-2xl z-10 relative border-4 border-gray-800" 
                        />
                    </div>
                </div>

            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex z-10">
                <div className="animate-float">
                    <a 
                        href="#about" 
                        className="flex items-center justify-center w-10 h-10 border border-gray-500/50 rounded-full text-gray-500"
                        aria-label="Rolar para Sobre Mim"
                    >
                        <FaChevronDown className="text-sm" />
                    </a>
                </div>
                
            </div>

        </section>
    );
}
