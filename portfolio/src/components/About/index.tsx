import { useTranslation } from 'react-i18next';

export function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 flex items-center gap-4">
                            {t('about.title')}
                        </h2>
                        <div className="h-1 w-20 bg-blue-500 mt-4 rounded"></div>
                    </div>

                    <div className="md:w-2/3 space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                        <p>{t('about.p3')}</p>
                    </div>

                </div>
                
            </div>
        </section>
    );
}
