import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useTranslation } from '../i18n/translations';

export default function Contact() {
    const { t } = useTranslation();

    const socialLinks = [
        {
            href: 'https://github.com/l1lm0ch1',
            icon: Github,
            label: 'GitHub',
            color: 'from-gray-600 to-gray-800',
            username: '@l1lm0ch1'
        },
        {
            href: 'https://www.linkedin.com/in/lilli-ölsinger-a07b51242',
            icon: Linkedin,
            label: 'LinkedIn',
            color: 'from-blue-600 to-blue-800',
            username: 'Lilli Ölsinger'
        },
        {
            href: 'mailto:lilli.oelsinger@gmail.com',
            icon: Mail,
            label: 'Email',
            color: 'from-red-500 to-pink-600',
            username: 'lilli.oelsinger@gmail.com'
        },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-16 text-center animate-fadeIn">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        {t('contact.title')}
                    </h1>
                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-8">{t('contact.subtitle')}</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Kontakt Info */}
                    <div className="space-y-8 animate-fadeIn" style={{animationDelay: '0.1s'}}>
                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                {t('nav.about') === 'About'
                                    ? "Feel free to reach out for collaborations, projects, or just to say hi! I'm always open to discussing new opportunities and interesting game development topics."
                                    : "Kontaktiere mich gerne für Kollaborationen, Projekte oder einfach nur zum Hallo sagen! Ich bin immer offen für neue Möglichkeiten und interessante Game Development Themen."
                                }
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <MapPin size={20} className="text-red-400"/>
                                    <span>Linz, Oberösterreich, Austria</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 flex items-center gap-4"
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                                    <div
                                        className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <link.icon size={24} className="text-white"/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors">
                                            {link.label}
                                        </h3>
                                        <p className="text-zinc-400 text-sm">{link.username}</p>
                                    </div>
                                    <Send size={20}
                                          className="text-zinc-600 group-hover:text-red-400 group-hover:translate-x-1 transition-all"/>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center animate-fadeIn" style={{animationDelay: '0.2s'}}>
                        <img
                            src={ '/images/ProfilePictureSQUARE.png' }
                            alt="Lilli Ölsinger"
                            className="rounded-2xl border border-zinc-800 shadow-lg w-full max-w-sm object-cover"
                        />
                    </div>
                </div>

                {/* Footer Call-to-action */}
                <div
                    className="mt-16 bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-500/20 rounded-3xl p-12 text-center animate-fadeIn"
                    style={{animationDelay: '0.3s'}}>
                    <h2 className="text-3xl font-bold text-white mb-4">Looking for collaboration?</h2>
                    <p className="text-zinc-300 text-lg max-w-3xl mx-auto">
                        {t('nav.about') === 'About'
                            ? "I'm always interested in exciting game development projects, internships, or collaborations. Whether it's indie games, VR experiences, or serious games - let's create something amazing together!"
                            : "Ich bin immer an spannenden Game Development Projekten, Praktika oder Kollaborationen interessiert. Ob Indie Games, VR Experiences oder Serious Games - lass uns gemeinsam etwas Großartiges erschaffen!"
                        }
                    </p>
                </div>

            </div>
        </div>
    );
}
