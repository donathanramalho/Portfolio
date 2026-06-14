import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-950 py-8 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-start md:flex-row md:items-center justify-between gap-4 md:gap-0">
                <p className="text-gray-400 text-sm">
                    {t('footer.rights')}
                </p>
                <p className="text-gray-500 text-xs font-mono">
                    {t('footer.built')}
                </p>
            </div>
        </footer>
    );
}
