import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../i18n/translations';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navItems = [
        { path: '/', key: 'home' },
        { path: '/about', key: 'about' },
        { path: '/projects', key: 'projects' },
        { path: '/hobbies', key: 'hobbies' },
        { path: '/contact', key: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform inline-block">
              LÖ
            </span>
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`transition-all duration-300 relative group ${
                                        location.pathname === item.path
                                            ? 'text-red-400'
                                            : 'text-zinc-300 hover:text-red-400'
                                    }`}
                                >
                                    {t(`nav.${item.key}`)}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                                        location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                                </Link>
                            ))}
                            <div className="flex items-center space-x-2 ml-4">
                                <button
                                    onClick={() => setLanguage('de')}
                                    className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
                                        language === 'de'
                                            ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
                                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                                    }`}
                                >
                                    DE
                                </button>
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
                                        language === 'en'
                                            ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
                                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                                    }`}
                                >
                                    EN
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-300 hover:text-white transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-800 animate-fadeIn">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-4 py-3 rounded-lg transition-all ${
                                    location.pathname === item.path
                                        ? 'text-red-400 bg-zinc-800/50'
                                        : 'text-zinc-300 hover:text-red-400 hover:bg-zinc-800/50'
                                }`}
                            >
                                {t(`nav.${item.key}`)}
                            </Link>
                        ))}
                        <div className="flex space-x-2 px-4 pt-2">
                            <button
                                onClick={() => setLanguage('de')}
                                className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                                    language === 'de' ? 'bg-red-500 text-white' : 'bg-zinc-800 text-zinc-400'
                                }`}
                            >
                                DE
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                                    language === 'en' ? 'bg-red-500 text-white' : 'bg-zinc-800 text-zinc-400'
                                }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}