import { GraduationCap, Briefcase, MapPin } from 'lucide-react';
import { useTranslation } from '../i18n/translations';

type Lang = 'de' | 'en';

interface Entry {
    title: string;
    org: string;
    location: string;
    period: { de: string; en: string };
    current?: boolean;
    description: { de: string; en: string };
    thesis?: { de: string; en: string };
    tags?: string[];
}

const education: Entry[] = [
    {
        title: 'FH Oberösterreich',
        org: 'Medientechnik & -Design',
        location: 'Campus Hagenberg',
        period: { de: 'Okt 2023 – heute', en: 'Oct 2023 – present' },
        current: true,
        description: {
            de: 'Bachelor-Studium mit Schwerpunkt Game Development. Neben Games und Prototypen auch Tutorin in Elektronik und Einführung in Games.',
            en: "Bachelor's degree with a game development focus. Besides building games and prototypes, also worked as a tutor in Electronics and Introduction to Games.",
        },
        thesis: {
            de: 'Bachelorarbeit: Approaches to Enhancing Immersion in Virtual Reality Through Physical Object Integration',
            en: "Bachelor's thesis: Approaches to Enhancing Immersion in Virtual Reality Through Physical Object Integration",
        },
        tags: ['Unity', 'Unreal Engine 5', 'C#', 'VR', 'Blender', 'Maya'],
    },
    {
        title: 'HTL Leonding',
        org: 'Elektronik & technische Informatik',
        location: 'Leonding',
        period: { de: 'Sep 2018 – Jun 2023', en: 'Sep 2018 – Jun 2023' },
        description: {
            de: 'Matura in Elektronik und technischer Informatik. Peers Program und Student Mentoring für Frauen in der Wirtschaft.',
            en: 'A-levels in electronics and computer engineering. Peers program and student mentoring for women in business.',
        },
        thesis: {
            de: 'Diplomarbeit: VR Haptik Handschuh mit elektronischer Bewegungssperre',
            en: 'Diploma thesis: VR haptic glove with electronic motion lock',
        },
        tags: ['C#', 'C', 'VHDL', 'Elektronik', 'HTML', 'CSS'],
    },
    {
        title: 'WRG/ORG der Franziskanerinnen',
        org: 'AHS',
        location: 'Wels',
        period: { de: '2014 – 2018', en: '2014 – 2018' },
        description: {
            de: 'Allgemeinbildende höhere Schule. Erste Berührungspunkte mit Technik und kreativem Gestalten.',
            en: 'General secondary school. First exposure to technology and creative design.',
        },
    },
    {
        title: 'VS 10',
        org: 'Volksschule',
        location: 'Wels',
        period: { de: '2010 – 2014', en: '2010 – 2014' },
        description: {
            de: 'Volksschule in Wels. Der Anfang von allem.',
            en: 'Primary school in Wels. Where it all started.',
        },
    },
];

const work: Entry[] = [
    {
        title: 'Development Intern',
        org: 'CHARK Studio',
        location: 'Litauen (remote)',
        period: { de: 'Feb – Mai 2026', en: 'Feb – May 2026' },
        current: true,
        description: {
            de: 'Verbesserung von VR-Interaktionssystemen, Bug Hunting & QA, Testen verschiedener Game Modes und UI Improvements.',
            en: 'VR interaction system improvements, bug hunting & QA, testing and modifying game modes, UI improvements.',
        },
        tags: ['Unity', 'VR', 'QA'],
    },
    {
        title: 'Web Development Intern',
        org: 'Ahoi Kapptn!',
        location: 'Linz',
        period: { de: 'Jul – Sep 2025', en: 'Jul – Sep 2025' },
        description: {
            de: 'Entwicklung autonomer KI-Agenten für Prozessautomatisierung, Implementierung von MCP-basierten Interfaces und Python-Skripten für technische Validierungen.',
            en: 'Building autonomous AI agents for process automation, MCP-based interfaces, and Python scripts for technical validation.',
        },
        tags: ['Python', 'MCP', 'AI Agents'],
    },
    {
        title: 'iOS Backend Intern',
        org: 'Runtastic',
        location: 'Pasching',
        period: { de: 'Jul 2022', en: 'Jul 2022' },
        description: {
            de: 'Code-Optimierungen und Einstieg in Swift sowie iOS Backend-Entwicklung.',
            en: 'Code optimization and introduction to Swift and iOS backend development.',
        },
        tags: ['Swift', 'iOS', 'Backend'],
    },
    {
        title: 'Automation Intern',
        org: 'BRP Rotax',
        location: 'Gunskirchen',
        period: { de: 'Aug 2020', en: 'Aug 2020' },
        description: {
            de: 'Roboterprogrammierung zur Automatisierung von Produktionsprozessen, Einführung in kollaborative Roboter (Cobot).',
            en: 'Robot programming for production process automation, introduction to collaborative robot (Cobot) systems.',
        },
        tags: ['Robotik', 'Automatisierung', 'Cobot'],
    },
    {
        title: 'Track Staff & Hospitality',
        org: 'Karthalle MAXDome, BRP Rotax',
        location: 'Gunskirchen',
        period: { de: 'wiederkehrend', en: 'recurring' },
        description: {
            de: 'Empfang, Service und Betrieb am Track — das unglamouröse Gegengewicht zu allen anderen Einträgen hier.',
            en: 'Reception, service, and track operations — the unglamorous counterweight to everything else on this list.',
        },
    },
];

interface TimelineItemProps {
    entry: Entry;
    lang: Lang;
    isLast: boolean;
}

function TimelineItem({ entry, lang, isLast }: TimelineItemProps) {
    return (
        <div className={`relative pl-8 ${isLast ? '' : 'pb-6'}`}>
            <div
                className={`absolute left-[5px] top-4 bottom-0 w-px ${isLast ? 'hidden' : 'block'} bg-zinc-800`}
            />
            <div
                className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 z-10 ${
                    entry.current
                        ? 'bg-red-500 border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]'
                        : 'bg-zinc-950 border-zinc-600'
                }`}
            />
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors duration-200">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-medium text-base leading-snug">{entry.title}</h3>
                    <span
                        className={`text-xs px-2.5 py-0.5 rounded-full border shrink-0 ${
                            entry.current
                                ? 'text-red-400 border-red-500/30 bg-red-500/10'
                                : 'text-zinc-500 border-zinc-700 bg-zinc-900'
                        }`}
                    >
            {entry.period[lang]}
          </span>
                </div>
                <p className="text-zinc-400 text-sm mb-1">{entry.org}</p>
                <p className="text-zinc-600 text-xs flex items-center gap-1 mb-3">
                    <MapPin size={11} />
                    {entry.location}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">{entry.description[lang]}</p>
                {entry.thesis && (
                    <p className="mt-3 text-xs text-zinc-500 italic border-l-2 border-red-500/40 pl-3 leading-relaxed">
                        {entry.thesis[lang]}
                    </p>
                )}
                {entry.tags && entry.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                        {entry.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">
                {tag}
              </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Journey() {
    const { language } = useTranslation();
    const lang = language as Lang;

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-red-500 text-xs uppercase tracking-widest mb-3">
                        {lang === 'de' ? 'Wer ich bin & wo ich war' : 'Who I am & where I\'ve been'}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        {lang === 'de' ? 'Werdegang' : 'Journey'}
                    </h1>
                    <div className="w-12 h-0.5 bg-red-500 mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap size={16} className="text-red-500 shrink-0" />
                            <span className="text-xs uppercase tracking-widest text-zinc-400">
                {lang === 'de' ? 'Bildung' : 'Education'}
              </span>
                            <div className="flex-1 h-px bg-zinc-800" />
                        </div>
                        <div>
                            {education.map((entry, i) => (
                                <TimelineItem
                                    key={entry.title}
                                    entry={entry}
                                    lang={lang}
                                    isLast={i === education.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase size={16} className="text-red-500 shrink-0" />
                            <span className="text-xs uppercase tracking-widest text-zinc-400">
                {lang === 'de' ? 'Erfahrung' : 'Experience'}
              </span>
                            <div className="flex-1 h-px bg-zinc-800" />
                        </div>
                        <div>
                            {work.map((entry, i) => (
                                <TimelineItem
                                    key={entry.title + entry.org}
                                    entry={entry}
                                    lang={lang}
                                    isLast={i === work.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}