import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useTranslation } from '../i18n/translations';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="relative z-10 py-12 px-4 border-t border-zinc-800/50 mt-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
                            LÖ
                        </h3>
                        <p className="text-zinc-400 text-sm">
                            Game Developer & Media Designer
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Navigation</h4>
                        <div className="space-y-2">
                            {['about', 'projects', 'hobbies', 'contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item}`}
                                    className="block text-zinc-400 hover:text-red-400 transition-colors text-sm"
                                >
                                    {t(`nav.${item}`)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Social</h4>
                        <div className="space-y-2">
                            <a href="https://github.com/l1lm0ch1" className="block text-zinc-400 hover:text-red-400 transition-colors text-sm">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/lilli-ölsinger-a07b51242" className="block text-zinc-400 hover:text-red-400 transition-colors text-sm">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-4 pt-8 border-t border-zinc-800/50">
                    <div className="flex items-center justify-center gap-2 text-zinc-500">
                        <span>{t('footer.made')}</span>
                        <Heart size={16} className="text-red-500 animate-pulse" />
                        <span>{t('footer.in')}</span>
                    </div>
                    <p className="text-zinc-600 text-sm">
                        © 2025 Lilli Ölsinger. {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
}