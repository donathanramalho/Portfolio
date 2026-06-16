import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function Skills() {
    const { t } = useTranslation();

    const skillCategories = t('skills.categories', { returnObjects: true }) as Array<{
        name: string;
        items: string[];
    }>;

    return (
        <section id="skills" className="py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-16 flex flex-col items-start gap-2">
                    {t('skills.title')}
                    <div className="h-1 w-20 bg-blue-500 rounded"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900/80 border border-blue-900 rounded-xl p-6 transition-shadow transition-colors duration-300 hover:ring-1 hover:ring-blue-500"
                        >
                            <h3 className="text-xl font-bold text-slate-200 mb-6">
                                {category.name}
                            </h3>
                            
                            <div className="flex flex-wrap gap-2.5">
                                {category.items.map((skill, i) => (
                                    <span 
                                        key={i} 
                                        className="px-3 py-1.5 bg-slate-950 text-slate-300 border border-slate-800 rounded-full text-sm font-medium hover:border-blue-800 transition-colors duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}
