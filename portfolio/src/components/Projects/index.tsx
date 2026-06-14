import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export function Projects() {
    const { t } = useTranslation();
    
    const projects = t('projects.items', { returnObjects: true }) as Array<{
        title: string;
        badge: string;
        description: string;
        image: string;
        tech: string[];
        github: string;
        deploy: string;
    }>;

    return (
        <section id="projects" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 flex items-center gap-4">
                    <span className="text-blue-500 font-mono text-xl">03.</span> 
                    {t('projects.title')}
                    <div className="h-[1px] bg-gray-700 flex-grow ml-4 max-w-xs"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl overflow-hidden flex flex-col border border-gray-700 hover:border-blue-500 transition-colors group">
                            
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {project.badge && (
                                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        {project.badge}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                
                                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="mt-auto mb-6 flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-mono bg-gray-900 text-blue-400 px-3 py-1 rounded-full border border-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors text-sm font-medium"
                                    >
                                        <FaGithub className="text-base" /> {t('projects.githubBtn')}
                                    </a>
                                    
                                    {project.deploy && (
                                        <a 
                                            href={project.deploy} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors text-sm font-medium"
                                        >
                                            <FaExternalLinkAlt className="text-sm" /> {t('projects.deployBtn')}
                                        </a>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}
