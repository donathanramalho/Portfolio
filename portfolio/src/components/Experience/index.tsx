import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaShieldAlt } from 'react-icons/fa';

export function Experience() {
    const { t } = useTranslation();

    const jobs = t('experience.jobs', { returnObjects: true }) as Array<{
        role: string;
        company: string;
        period: string;
        description: string;
    }>;

    const educations = t('education.items', { returnObjects: true }) as Array<{
        course: string;
        institution: string;
        type: string;
    }>;

    return (
        <section id="experience" className="py-24 bg-gray-900">
            <div className="max-w-4xl mx-auto px-6">
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-16 flex items-center gap-4">
                    <span className="text-blue-500 font-mono text-xl">02.</span> 
                    {t('experience.title')}
                    <div className="h-[1px] bg-gray-700 flex-grow ml-4 max-w-xs"></div>
                </h2>

                <div className="relative border-l-2 border-gray-700 ml-3 md:ml-4">
                    {jobs.map((job, index) => (
                        <div key={index} className="mb-12 ml-8 md:ml-12 relative group">
                            
                            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 bg-gray-900 border-2 border-gray-500 rounded-full group-hover:border-blue-500 transition-colors duration-300"></div>
                            
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                                    {job.role} <span className="text-blue-500">@ {job.company}</span>
                                </h3>
                                <span className="text-sm font-mono text-gray-500 mt-1 md:mt-0">
                                    {job.period}
                                </span>
                            </div>
                            
                            <p className="text-gray-400 leading-relaxed text-base">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-3">
                        <FaGraduationCap className="text-blue-500" /> {t('education.title')}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {educations.map((edu, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors flex flex-col justify-center">
                                <div className="text-blue-500 mb-3 text-2xl">
                                    {edu.institution === "IBM" ? <FaShieldAlt /> : <FaGraduationCap />}
                                </div>
                                <h4 className="text-lg font-bold text-gray-100">{edu.course}</h4>
                                <p className="text-blue-400 font-medium text-sm mt-1">{edu.institution}</p>
                                <p className="text-gray-500 text-sm mt-2 font-mono">{edu.type}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}