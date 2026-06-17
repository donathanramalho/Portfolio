import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, type MouseEvent } from 'react';

type ProjectType = {
    title: string;
    badge: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    deploy: string;
};

function ProjectCard({ project, index, textGithub, textDeploy }: { project: ProjectType, index: number, textGithub: string, textDeploy: string }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();

        setMousePosition({
            x: clientX - left,
            y: clientY - top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className="relative flex flex-col h-full w-full rounded-xl p-[2px] overflow-hidden group"
        >

            {/* Lights */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.8), transparent 40%)`
                }}
            ></div>

            <div className="relative z-10 flex flex-col flex-grow w-full bg-slate-900 rounded-[10px] overflow-hidden border border-blue-500/20">

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-950 border-b border-slate-800/50 group/image">

                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105 opacity-90"
                    />

                    {/* Dark Background on image */}
                    <div className="hidden md:block absolute inset-0 bg-slate-950/0 group-hover/image:bg-slate-950/70 transition-colors duration-300 z-10"></div>

                    {/* Buttons (Images) */}
                    <div className="hidden md:flex absolute inset-0 z-20 items-center justify-center gap-8 opacity-0 translate-y-3 group-hover/image:opacity-100 group-hover/image:translate-y-0 transition-all duration-500 ease-out">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-gray-300 hover:text-white transition-colors"
                            >
                                <div className="bg-slate-900/80 p-3 rounded-full mb-2 border border-slate-600 hover:border-slate-400 hover:scale-105 transition-all">
                                    <FaGithub className="text-xl" />
                                </div>
                                <span className="text-xs font-medium tracking-wide">{textGithub}</span>
                            </a>
                        )}

                        {project.deploy && (
                            <a
                                href={project.deploy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-gray-300 hover:text-white transition-colors"
                            >
                                <div className="bg-slate-900/80 p-3 rounded-full mb-2 border border-slate-600 hover:border-slate-400 hover:scale-105 transition-all">
                                    <FaExternalLinkAlt className="text-xl" />
                                </div>
                                <span className="text-xs font-medium tracking-wide">{textDeploy}</span>
                            </a>
                        )}

                    </div>

                    {/* Badge */}
                    {project.badge && (
                        <div className="absolute top-2 right-3 z-30 bg-slate-950/80 backdrop-blur-md border border-orange-500/50 text-orange-400 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow-xl">
                            {project.badge}
                        </div>
                    )}
                </div>

                {/* Texto Content */}
                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-100 mb-2">
                        {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="text-[11px] font-mono bg-slate-950 text-blue-400 px-3 py-1 rounded-full border border-slate-800">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Button in Mobile */}
                    <div className="flex md:hidden gap-3 mt-auto pt-4 border-t border-slate-800/50">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-gray-200 py-2 rounded transition-colors text-xs font-medium border border-slate-700"
                            >
                                <FaGithub className="text-sm" /> {textGithub}
                            </a>
                        )}

                        {project.deploy && (
                            <a
                                href={project.deploy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-gray-200 py-2 rounded transition-colors text-xs font-medium border border-slate-700"
                            >
                                <FaExternalLinkAlt className="text-sm" /> {textDeploy}
                            </a>
                        )}
                    </div>
                </div>
            </div>

        </motion.div>
    );
}

export function Projects() {
    const { t } = useTranslation();

    const projects = t('projects.items', { returnObjects: true }) as ProjectType[];

    return (
        <section id="projects" className="py-24">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-16 flex flex-col items-start gap-2">
                    {t('projects.title')}
                    <div className="h-1 w-20 bg-blue-500 rounded"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            textGithub={t('projects.githubBtn')}
                            textDeploy={t('projects.deployBtn')}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
