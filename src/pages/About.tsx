import { Code, Palette, Gamepad2, GraduationCap, Calendar } from 'lucide-react';
import { useTranslation, Language, translations } from '../i18n/translations';

export default function About() {
    const { t } = useTranslation();

    const skillCards = [
        {
            icon: Code,
            titleKey: 'about.card1.title',
            descKey: 'about.card1.desc',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Palette,
            titleKey: 'about.card2.title',
            descKey: 'about.card2.desc',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Gamepad2,
            titleKey: 'about.card3.title',
            descKey: 'about.card3.desc',
            color: 'from-red-500 to-orange-500'
        },
    ];

    const timeline = [
        {
            year: '2004',
            title: { de: 'Geboren', en: 'Born' },
            desc: { de: '04.08.2004 in Österreich', en: '04.08.2004 in Austria' },
            icon: Calendar,
        },
        {
            year: '2022',
            title: { de: 'HTL Leonding', en: 'HTL Leonding' },
            desc: { de: 'Matura in Elektronik & Technischer Informatik', en: 'Diploma in Electronics & Computer Science' },
            icon: GraduationCap,
        },
        {
            year: '2022-2025',
            title: { de: 'FH Hagenberg', en: 'FH Hagenberg' },
            desc: { de: 'Medientechnik & Design - Game Development', en: 'Media Technology & Design - Game Development' },
            icon: GraduationCap,
        },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center animate-fadeIn">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        {t('about.title')}
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-20 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
                            <p className="text-3xl font-semibold text-white mb-6">{t('about.greeting')}</p>
                            <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                                <p>{t('about.intro')}</p>
                                <p>{t('about.journey')}</p>
                                <p className="text-red-400 font-medium">{t('about.passion')}</p>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">{t('about.background')}</h3>
                            <div className="space-y-6">
                                {timeline.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                                                <item.icon size={20} className="text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="text-white font-bold">{item.title[t('nav.about') === 'About' ? 'en' : 'de']}</h4>
                                                <span className="text-xs text-red-400 font-mono">{item.year}</span>
                                            </div>
                                            <p className="text-zinc-400 text-sm">{item.desc[t('nav.about') === 'About' ? 'en' : 'de']}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="space-y-6">
                        <div className="relative aspect-square bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-red-500/30 flex items-center justify-center overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img src="./images/lilli-1.jpg" alt="Lilli Ölsinger" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Skills Cards */}
                <div className="mb-20 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills & Expertise</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {skillCards.map((card, i) => (
                            <div
                                key={i}
                                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                                <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <card.icon size={28} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {t(card.titleKey as keyof typeof translations[Language])}
                                </h3>
                                <p className="text-zinc-400">
                                    {t(card.descKey as keyof typeof translations[Language])}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech-Stack */}
                <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Tech Stack</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['C#', 'C', 'Java', 'Python', 'JavaScript', 'VHDL', 'Unity', 'Unreal Engine', 'HTML', 'CSS', 'PHP', '3D Modeling'].map((tech, i) => (
                                <div
                                    key={i}
                                    className="bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-center text-zinc-300 hover:border-red-500/50 hover:text-red-400 transition-all duration-300 hover:scale-105"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}