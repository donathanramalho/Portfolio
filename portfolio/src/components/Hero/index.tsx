import { useTranslation } from 'react-i18next';
import { FaFilePdf, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import { useState, type MouseEvent } from 'react';
import { motion, type Variants } from 'framer-motion';

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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section
            id="home"
            className="relative w-full min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-20 overflow-hidden group"
            onMouseMove={handleMouseMove}
        >
            {/* Backgrounds */}
            <div className="absolute inset-0 z-0 bg-[url('/fundo-hero.jpg')] bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 z-0 bg-gray-950/85"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-0"></div>

            {/* Mouse Tracking Gradient */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 57, 116, 0.10), transparent 80%)`}}/>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Side - Text */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 order-2 md:order-1"
                >
                    <motion.p variants={itemVariants} className="text-blue-500 font-semibold">
                        {t('hero.greeting')}
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold text-gray-100 tracking-wide italic"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {t('hero.name')}
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-bold text-gray-300 mt-2 mb-4 leading-snug">
                        {t('hero.subtitle')}
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed mb-6">
                        {t('hero.description')}
                    </motion.p>

                    {/* Buttons container animated together */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a
                            href={t('hero.resumeLink')}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center shadow-md shadow-blue-500/20"
                        >
                            {t('hero.ctaResume')}
                            <span className="text-[10px] font-bold bg-white/20 px-1.5 py-0.5 rounded uppercase tracking-wider text-blue-50 opacity-80 group-hover:opacity-100 transition-opacity">
                                {t('hero.langBadge')}
                            </span>
                            <FaFilePdf className="text-lg" />
                        </a>
                        <a
                            href="#projects"
                            className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium rounded-lg transition-colors text-center"
                        >
                            {t('hero.ctaProjects')} <FaExternalLinkAlt />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Side - Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="flex-1 flex items-center justify-center md:justify-end w-full h-full order-1 md:order-2"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative p-2 rounded-full border-2 border-slate-500"
                    >
                        <img
                            src="/Donathan.jpg"
                            alt="Donathan R. Gonçalves"
                            className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full shadow-2xl relative z-10 border-4 border-slate-800 bg-slate-950"
                        />
                    </motion.div>
                </motion.div>

            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex z-10"
            >
                <motion.a
                    href="#about"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center justify-center w-10 h-10 border border-gray-500/50 rounded-full text-gray-500 hover:text-gray-300 hover:border-gray-300 transition-colors"
                    aria-label="Rolar para Sobre Mim"
                >
                    <FaChevronDown className="text-sm" />
                </motion.a>
            </motion.div>

        </section>
    );
}