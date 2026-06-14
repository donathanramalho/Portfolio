import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-950 py-8 border-t border-gray-800 text-center">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-2">
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
