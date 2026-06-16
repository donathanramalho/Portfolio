import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
        <section id="experience" className="py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-16 flex flex-col items-start gap-2">
                    {t('experience.title')}
                    <div className="h-1 w-20 bg-blue-500 rounded"></div>
                </h2>

                <div className="relative pl-6 md:pl-8">
                    
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-blue-900 to-transparent"></div>

                    {jobs.map((job, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="mb-14 relative group"
                        >
                            
                            {/* Line Point */}
                            <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3.5 h-3.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] ring-4 ring-slate-950 transition-all duration-400 group-hover:bg-blue-900"></div>
                            
                            <div className="flex flex-col">
                                <span className="text-sm font-mono text-blue-400 mb-1">
                                    {job.period}
                                </span>
                                
                                <h3 className="text-lg md:text-xl font-bold text-slate-100">
                                    {job.role}
                                </h3>
                                
                                <span className="text-sm md:text-base font-medium text-slate-500 mt-1 mb-3">
                                    {job.company}
                                </span>
                            </div>

                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                {job.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* mt-24 distancia a educação da linha do tempo */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3">
                        <FaGraduationCap className="text-blue-500" /> {t('education.title')}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {educations.map((edu, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                // Cards mais limpos, usando a paleta slate e padding reduzido (p-5)
                                className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-center"
                            >
                                <div className="text-blue-500 mb-2 text-xl">
                                    {edu.institution === "IBM" ? <FaShieldAlt /> : <FaGraduationCap />}
                                </div>
                                {/* Fontes ajustadas para proporção mais elegante */}
                                <h4 className="text-base font-bold text-slate-100">{edu.course}</h4>
                                <p className="text-blue-400 font-medium text-sm mt-1">{edu.institution}</p>
                                <p className="text-slate-500 text-sm mt-2 font-mono">{edu.type}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}