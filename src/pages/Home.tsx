import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Code, Palette, Gamepad2 } from 'lucide-react';
import { useTranslation } from '../i18n/translations';

export default function Home() {
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const features = [
        { icon: Code, label: 'Programming', color: 'from-blue-500 to-cyan-500' },
        { icon: Palette, label: '3D & Design', color: 'from-purple-500 to-pink-500' },
        { icon: Gamepad2, label: 'Game Design', color: 'from-red-500 to-orange-500' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section
                className="min-h-screen flex items-center justify-center px-4 pt-32 pb-32 relative overflow-visible">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.15), transparent 80%)`
                    }}
                />

                <div className="max-w-5xl text-center relative z-10">
                    <div
                        className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 backdrop-blur-sm animate-fadeIn">
                        <Sparkles size={16} className="animate-pulse"/>
                        <span className="text-sm">{t('hero.subtitle')}</span>
                    </div>

                    <p className="text-red-400 text-lg mb-4 animate-fadeIn" style={{animationDelay: '0.1s'}}>
                        {t('hero.greeting')}
                    </p>

                    <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight md:leading-[1.5] bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent animate-fadeIn"
                        style={{animationDelay: '0.2s'}}>
                        Lilli Ölsinger
                    </h1>

                    <h2 className="text-3xl md:text-4xl text-zinc-300 mb-8 font-light animate-fadeIn"
                        style={{animationDelay: '0.3s'}}>
                        {t('hero.title')}
                    </h2>

                    <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeIn"
                       style={{animationDelay: '0.4s'}}>
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn"
                         style={{animationDelay: '0.5s'}}>
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-500/50 group font-medium text-lg"
                        >
                            {t('hero.cta')}
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24}/>
                        </Link>

                        <Link
                            to="/projects"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-red-500/50 text-white rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group font-medium text-lg"
                        >
                            {t('hero.cta2')}
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24}/>
                        </Link>
                    </div>

                    <div className="mt-20 animate-bounce">
                        <p className="text-zinc-500 text-sm">{t('hero.scroll')}</p>
                        <div
                            className="w-6 h-10 border-2 border-zinc-700 rounded-full mx-auto mt-4 flex justify-center">
                            <div className="w-1.5 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Features Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 text-center"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon size={32} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{feature.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-500/20 rounded-3xl p-12">

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                            {t('cta.heading')}
                        </h2>

                        <p className="text-zinc-400 text-lg mb-8">
                            {t('cta.text')}
                        </p>

                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-500/50 group font-medium text-lg"
                        >
                            {t('projects.view')} {/* optional auch den Button-Text übersetzbar machen */}
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24}/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}