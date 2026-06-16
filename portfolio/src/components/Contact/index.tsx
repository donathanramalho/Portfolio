import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export function Contact() {
    const { t } = useTranslation();
    
    return (
        <section id="contact" className="py-24">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-16 gap-4">
                    {t('contact.title')}
                    <div className="h-1 w-20 bg-blue-500 mt-4 rounded"></div>
                </h2>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 text-center">
                    {t('contact.subtitle')}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-2xl mx-auto text-center">
                    {t('contact.description')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    
                    {/* E-mail */}
                    <a 
                        href="mailto:donathan03@gmail.com" 
                        className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-800/80 text-sm font-medium rounded-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <FaEnvelope className="text-lg" />
                        {t('contact.emailBtn')}
                    </a>

                    {/* LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/donathan-goncalves-89b06a181/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-800/80 text-sm font-medium rounded-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <FaLinkedin className="text-lg" />
                        {t('contact.linkedinBtn')}
                    </a>

                    {/* GitHub */}
                    <a 
                        href="https://github.com/donathanramalho" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-800/80 text-sm font-medium rounded-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <FaGithub className="text-lg" />
                        {t('contact.githubBtn')}
                    </a>

                </div>
            </div>
        </section>
    );
}
