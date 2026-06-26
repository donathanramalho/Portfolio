import styles from './style.module.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Header() {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const navLinks = [
        { key: 'about', href: '#about' },
        { key: 'experience', href: '#experience' },
        { key: 'projects', href: '#projects' },
        { key: 'contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md text-white z-50 border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Left Side: Donathan */}
                    <div className="text-xl font-bold tracking-wider">
                        <a href="#home">Donathan<span className="text-blue-500">.</span></a>
                    </div>

                    {/* Right Side: Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                className={styles.navLink}
                            >
                                {t(`nav.${link.key}`)}
                            </a>
                        ))}

                        {/* Languages (Hover) */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium py-2">
                                <img
                                    src={i18n.language == 'pt' ? "https://flagcdn.com/w20/br.png" : "https://flagcdn.com/w20/us.png"}
                                    alt="Idioma atual"
                                    className="w-6 h-4 object-cover rounded-sm shadow-sm"
                                />
                                <span>{i18n.language === 'pt' ? 'PT' : 'EN'}</span>
                            </button>

                            {/* Hidden Dropdown with hover */}
                            <div className="absolute right-0 mt-0 w-36 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                                <button
                                    onClick={() => handleChangeLanguage('pt')}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-700 flex items-center gap-2"
                                >
                                    <img src="https://flagcdn.com/w20/br.png" alt="Português" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                                    Português
                                </button>
                                <button
                                    onClick={() => handleChangeLanguage('en')}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-700 flex items-center gap-2"
                                >
                                    <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                                    English
                                </button>
                            </div>
                        </div>
                    </nav>

                    {/* Right Side: Mobile */}
                    <div className="flex items-center md:hidden gap-6">

                        {/* Mobile Language Change */}
                        <button
                            onClick={() => handleChangeLanguage(i18n.language === 'pt' ? 'en' : 'pt')}
                            className="flex items-center hover:opacity-80 transition-opacity"
                            title="Trocar idioma"
                        >
                            <img
                                src={i18n.language === 'pt' ? "https://flagcdn.com/w20/br.png" : "https://flagcdn.com/w20/us.png"}
                                alt="Trocar idioma"
                                className="w-6 h-4 object-cover rounded shadow-sm"
                            />
                        </button>

                        {/* Mobile Menu */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex flex-col items-end gap-[5px] w-8 focus:outline-none"
                        >
                            <div className={`h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-[7px]' : 'w-8'}`}></div>
                            <div className={`h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></div>
                            <div className={`h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[7px]' : 'w-4'}`}></div>
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 border-t border-gray-700">
                    <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 text-md font-medium hover:text-blue-500 text-center w-full"
                            >
                                {t(`nav.${link.key}`)}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}