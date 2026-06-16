import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex flex-col items-start gap-2">
                        {t('about.title')}
                        <div className="h-1 w-20 bg-blue-500 rounded"></div>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6 text-base text-slate-400 leading-relaxed"
                >
                    <p>{t('about.p1')}</p>
                    <p>{t('about.p2')}</p>
                </motion.div>
                
            </div>
        </section>
    );
}
