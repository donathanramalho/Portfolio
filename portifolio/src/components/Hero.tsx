import { useTranslation } from 'react-i18next';
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

export function Hero() {
    const { t } = useTranslation();

    return (
        <section id="home" className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between py-20 px-6 gap-10">
        {/* <section id="home" className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between py-20 md:pb-0 px-6 gap-10"> */}
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start gap-4">
            
            <p className="text-gray-400 text-lg font-mono">
            {t('hero.greeting')}
            </p>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-100 tracking-tight">
            {t('hero.name')}
            </h1>
            
            <h2 className="text-3xl md:text-5md font-bold text-gray-300 mt-2 mb-4 leading-snug">
            {t('hero.subtitle')}
            </h2>
            
            <p className="text-gray-400 max-w-xl text-lg leading-relaxed mb-8">
            {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Download CV */}
            <a 
                href="/Donathan_Goncalves_Software_PT.pdf"
                target="_blank"
                className="flex items-center justify-center gap-3 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors text-center"
            >
                {t('hero.ctaResume')} <FaFilePdf className="text-xl" />
            </a>
            
            {/* View Projects */}
            <a 
                href="#projects" 
                className="flex items-center justify-center gap-3 px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium rounded transition-colors text-center"
            >
                {t('hero.ctaProjects')} <FaExternalLinkAlt />
            </a>
            </div>
        </div>

        {/* Right Side (Photo) */}
        <div className="flex-1 flex items-end justify-center md:justify-end h-full">
        {/* <div className="flex-1 flex items-end justify-center md:justify-end md:self-end h-full"> */}
            <div className="relative">
                {/* Photo */}
                <img 
                    src="/Donathan.jpg"
                    alt="Donathan R. Gonçalves"
                    className="max-w-md w-full h-auto object-cover rounded-b-2xl shadow-xl z-10 relative" 
                />
            </div>
        </div>
        
        </section>
    );
}