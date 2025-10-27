import { useTranslation } from '../i18n/translations';

const hobbiesData = [
    {
        icon: '🏂',
        name: { de: 'Snowboarden', en: 'Snowboarding' },
        desc: { de: 'Meine Leidenschaft in den Bergen', en: 'My passion in the mountains' },
        color: 'from-blue-400 to-cyan-500',
        details: {
            de: 'Wenn der Winter kommt, bin ich am liebsten auf der Piste. Snowboarden gibt mir die perfekte Balance zwischen Adrenalin und Entspannung. Die österreichischen Alpen bieten die perfekte Kulisse für dieses Hobby.',
            en: 'When winter comes, I love being on the slopes. Snowboarding gives me the perfect balance between adrenaline and relaxation. The Austrian Alps provide the perfect backdrop for this hobby.',
        }
    },
    {
        icon: '🍰',
        name: { de: 'Backen', en: 'Baking' },
        desc: { de: 'Kreativ in der Küche', en: 'Creative in the kitchen' },
        color: 'from-pink-400 to-rose-500',
        details: {
            de: 'Backen ist für mich wie Game Development - es braucht Präzision, Kreativität und Geduld. Ich liebe es, neue Rezepte auszuprobieren und meine Freunde mit selbstgemachten Kuchen zu überraschen.',
            en: 'Baking is like game development to me - it requires precision, creativity, and patience. I love trying new recipes and surprising my friends with homemade cakes.',
        }
    },
    {
        icon: '📚',
        name: { de: 'Lesen', en: 'Reading' },
        desc: { de: 'In andere Welten eintauchen', en: 'Diving into other worlds' },
        color: 'from-amber-400 to-orange-500',
        details: {
            de: 'Bücher sind für mich Inspiration und Entspannung zugleich. Besonders Fantasy und Sci-Fi Romane faszinieren mich, da sie oft die Basis für großartige Game-Welten bilden.',
            en: 'Books are both inspiration and relaxation for me. I\'m particularly fascinated by fantasy and sci-fi novels, as they often form the basis for great game worlds.',
        }
    },
    {
        icon: '🎨',
        name: { de: 'Zeichnen', en: 'Drawing' },
        desc: { de: 'Ideen visualisieren', en: 'Visualizing ideas' },
        color: 'from-purple-400 to-indigo-500',
        details: {
            de: 'Zeichnen hilft mir, Ideen für Games zu visualisieren. Ob Character Designs, Concept Art oder einfach nur Skizzen - es ist ein wichtiger Teil meines kreativen Prozesses.',
            en: 'Drawing helps me visualize ideas for games. Whether character designs, concept art, or just sketches - it\'s an important part of my creative process.',
        }
    },
    {
        icon: '🎮',
        name: { de: 'Gaming', en: 'Gaming' },
        desc: { de: 'Inspiration und Spaß', en: 'Inspiration and fun' },
        color: 'from-red-400 to-pink-500',
        details: {
            de: 'Gaming ist nicht nur mein Hobby, sondern auch meine größte Inspirationsquelle. Ich analysiere Game Design, Mechaniken und Narrative, um selbst bessere Games zu entwickeln.',
            en: 'Gaming is not only my hobby but also my greatest source of inspiration. I analyze game design, mechanics, and narratives to develop better games myself.',
        }
    },
];

export default function Hobbies() {
    const { language, t } = useTranslation();

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center animate-fadeIn">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        {t('hobbies.title')}
                    </h1>
                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-8">{t('hobbies.subtitle')}</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* Hobbies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {hobbiesData.map((hobby, i) => (
                        <div
                            key={i}
                            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fadeIn"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className="flex items-start gap-6 mb-4">
                                    <div className={`w-20 h-20 bg-gradient-to-br ${hobby.color} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                        {hobby.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                            {hobby.name[language]}
                                        </h3>
                                        <p className="text-red-400 text-sm font-medium">{hobby.desc[language]}</p>
                                    </div>
                                </div>
                                <p className="text-zinc-400 leading-relaxed">{hobby.details[language]}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Personal Note */}
                <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-500/20 rounded-3xl p-12 text-center animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    <h2 className="text-3xl font-bold text-white mb-6">{t('hobbies.passion')}</h2>
                    <p className="text-zinc-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        {language === 'de'
                            ? 'Alle meine Hobbies fließen auf die eine oder andere Weise in meine Game Development Arbeit ein. Sie halten mich kreativ, inspiriert und ausgeglichen.'
                            : 'All my hobbies flow into my game development work in one way or another. They keep me creative, inspired, and balanced.'
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}