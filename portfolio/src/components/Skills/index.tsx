import { useTranslation } from 'react-i18next';
import { SiReact, SiTypescript, SiTailwindcss, SiSharp, SiDotnet, SiPython, SiDjango, SiDocker } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { DiMsqlServer } from 'react-icons/di';

export function Skills() {
    const { t } = useTranslation();

    const skillCategories = [
        {
            title: t('skills.frontend'),
            skills: [
                { name: 'React', icon: SiReact, color: 'group-hover:text-[#61DAFB]' },
                { name: 'TypeScript', icon: SiTypescript, color: 'group-hover:text-[#3178C6]' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'group-hover:text-[#06B6D4]' },
            ]
        },
        {
            title: t('skills.backend'),
            skills: [
                { name: 'C#', icon: SiSharp, color: 'group-hover:text-[#239120]' },
                { name: '.NET Core', icon: SiDotnet, color: 'group-hover:text-[#512BD4]' },
                { name: 'Python', icon: SiPython, color: 'group-hover:text-[#3776AB]' },
                { name: 'Django', icon: SiDjango, color: 'group-hover:text-[#092E20]' },
            ]
        },
        {
            title: t('skills.tools'),
            skills: [
                { name: 'Docker', icon: SiDocker, color: 'group-hover:text-[#2496ED]' },
                { name: 'SQL Server', icon: DiMsqlServer, color: 'group-hover:text-[#CC2927]' },
                { name: 'GitHub', icon: FaGithub, color: 'group-hover:text-white' },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-gray-800">
            <div className="max-w-6xl mx-auto px-6">
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-16 items-center gap-4">
                    {t('skills.title')}
                    <div className="h-1 w-20 bg-blue-500 mt-4 rounded"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start">
                            
                            <h3 className="text-xl font-mono text-blue-500 mb-6 border-b border-gray-700 pb-2 w-full text-center md:text-left">
                                {category.title}
                            </h3>
                            
                            <div className="grid grid-cols-2 gap-4 w-full">
                                {category.skills.map((skill, i) => (
                                    <div 
                                        key={i} 
                                        className="group flex flex-col items-center justify-center bg-gray-900 border border-gray-700 hover:border-gray-500 rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                                    >
                                        <skill.icon className={`text-4xl text-gray-500 transition-colors duration-300 mb-3 ${skill.color}`} />
                                        <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}