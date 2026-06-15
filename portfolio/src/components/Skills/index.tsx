import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function Skills() {
    const { t } = useTranslation();

    // Puxando o array de categorias direto do JSON de tradução
    const skillCategories = t('skills.categories', { returnObjects: true }) as Array<{
        name: string;
        items: string[];
    }>;

    return (
        <section id="skills" className="py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* O seu título com a linha azul */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-16 flex flex-col items-start gap-2">
                    {t('skills.title')}
                    <div className="h-1 w-20 bg-blue-500 rounded"></div>
                </h2>

                {/* Grid para os blocos de categorias */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index} 
                            // Animação de entrada suave de baixo para cima
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-900 border border-gray-700 hover:border-blue-500/50 rounded-xl p-6 transition-colors duration-300"
                        >
                            {/* Título do Quadrado */}
                            <h3 className="text-xl font-bold text-gray-200 mb-6">
                                {category.name}
                            </h3>
                            
                            {/* Container das Tags (flex-wrap faz quebrar a linha automaticamente) */}
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, i) => (
                                    <span 
                                        key={i} 
                                        className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 cursor-default"
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