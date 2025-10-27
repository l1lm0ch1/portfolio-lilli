import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { useTranslation } from '../i18n/translations';

const projectsData = {
    'vr-avatar': {
        title: 'VR Chat Avatar',
        category: 'VR / 3D Modeling',
        year: '2020',
        color: 'from-purple-500 to-pink-500',
        description: {
            de: 'Mein erster Schritt in die 3D-Welt war die Erstellung eines Custom Avatars für VRChat. Hier habe ich gelernt, wie man mit VRoid Studio einfach Avatare für VRChat erstellen kann.',
            en: 'My first step into the 3D world was creating a custom avatar for VRChat. Here I learned how to create Avatars with VRoid studio for VRChat.',
        },
        longDescription: {
            de: 'Dieses Projekt war mein Einstieg in die Welt der VR-Entwicklung. Ich habe mit VRoid Studio gearbeitet, um einen vollständig angepassten Avatar zu erstellen, der meine Persönlichkeit widerspiegelt. Der Prozess umfasste eine umfassende VRoid Studio Einführung und Rigginganpassungen für VRChat. Besonders herausfordernd war die Optimierung für VR-Performance, da Avatare in VRChat strenge Polygon-Limits haben.',
            en: 'This project was my entry into the world of 3D modeling and VR development. I worked with Blender to create a fully customized avatar that reflects my personality. The process included an extensive introduction to Vroid studio and rigging changes for VRChat. Particularly challenging was optimizing for VR performance, as avatars in VRChat have strict polygon limits.',
        },
        tags: ['3D Modeling', 'VRChat', 'VRoid Studio', 'Unity', 'VRChat SDK'],
        tech: ['Blender', 'Unity', 'VRChat SDK'],
        images: [
            '/assets/projects/vr-avatar-1.png',
            '/assets/projects/vr-avatar-2.png',
            '/assets/projects/vr-avatar-3.png',
        ],
    },
    'vr-world': {
        title: 'VR Chat World',
        category: 'VR / Level Design',
        year: '2021',
        color: 'from-blue-500 to-cyan-500',
        description: {
            de: 'Eine vollständige VR-Welt mit interaktiven Elementen und atmosphärischem Design.',
            en: 'A complete VR world with interactive elements and atmospheric design.',
        },
        longDescription: {
            de: 'Nach meinem ersten Avatar wollte ich eine eigene Welt erschaffen. Diese VR-Welt kombiniert Level Design, Lighting und interaktive Elemente, um eine immersive Erfahrung zu schaffen. Ich habe Unity eingesetzt und mich intensiv mit dem  VRChat SDK auseinandergesetzt.',
            en: 'After my first avatar, I wanted to create my own world. This VR world combines level design, lighting, and interactive elements to create an immersive experience. I used Unity and worked intensively with the VRChat SDK.',
        },
        tags: ['Level Design', 'VRChat', 'Unity', 'VRChat SDK', 'Lighting'],
        tech: ['Unity', 'VRChat SDK', 'ProBuilder'],
        images: [
            '/assets/projects/vr-world-1.png',
            '/assets/projects/vr-world-2.png',
            '/assets/projects/vr-world-3.png',
        ],
    },
    'divine-meltdown': {
        title: 'Divine Meltdown Chpt. 1',
        category: 'Game Development',
        year: '2022',
        color: 'from-orange-500 to-red-500',
        description: {
            de: 'Story-getriebenes Adventure mit atmosphärischem Storytelling und emotionaler Tiefe.',
            en: 'Story-driven adventure with atmospheric storytelling and emotional depth.',
        },
        longDescription: {
            de: 'Divine Meltdown ist ein narratives Adventure-Game, das ich als erstes vollwertiges Spiel-Projekt an der FH entwickelt habe. Das Spiel erzählt eine emotionale Geschichte und kombiniert Exploration mit Puzzle-Elementen. Besonders wichtig war mir hier die Atmosphäre durch Lighting, Sound Design und cinematische Kameraführung.',
            en: 'Divine Meltdown is a narrative adventure game that I developed as my first full game project at university. The game tells an emotional story and combines exploration with puzzle elements. Particularly important to me was the atmosphere through lighting, sound design, and cinematic camera work.',
        },
        tags: ['Unity', 'C#', 'Narrative Design', 'Sound Design', 'Puzzle'],
        tech: ['Unity', 'C#', 'Timeline', 'Cinemachine'],
        images: [
            '/assets/projects/divine-meltdown-1.png',
            '/assets/projects/divine-meltdown-2.png',
            '/assets/projects/divine-meltdown-3.png',
        ],
    },
    'shadow-runner': {
        title: 'Shadow Runner',
        category: 'Game Development',
        year: '2022',
        color: 'from-gray-700 to-gray-900',
        description: {
            de: 'Schneller Action-Plattformer mit präzisem Movement-System.',
            en: 'Fast-paced action platformer with precise movement system.',
        },
        longDescription: {
            de: 'Shadow Runner ist ein 2D-Plattformer, bei dem Geschwindigkeit und Präzision im Vordergrund stehen. Ich habe ein responsives Movement-System entwickelt und mich auf tight game feel konzentriert. Das Projekt hat mir geholfen, Gameplay Programming und Game Feel zu verstehen.',
            en: 'Shadow Runner is a 2D platformer where speed and precision are paramount. I developed a responsive movement system and focused on tight game feel. This project helped me understand gameplay programming and game feel.',
        },
        tags: ['Construct 3', 'Platformer', 'Game Feel', '2D'],
        tech: ['Construct 3'],
        images: [
            '/assets/projects/shadow-runner-1.png',
            '/assets/projects/shadow-runner-2.png',
            '/assets/projects/shadow-runner-3.png',
        ],
    },
    'last-symphony': {
        title: 'The Last Symphony',
        category: 'Game Development',
        year: '2023',
        color: 'from-indigo-500 to-purple-600',
        description: {
            de: 'Puzzle-Adventure mit musikalischen Gameplay-Mechaniken.',
            en: 'Puzzle adventure with musical gameplay mechanics.',
        },
        longDescription: {
            de: 'The Last Symphony verbindet Musik und Gameplay auf innovative Weise. Das Spiel nutzt Audio-Frequenzen als Puzzle-Mechanik. Spieler müssen verschiedene Töne und Melodien kombinieren, um Rätsel zu lösen. Die Herausforderung war, Audio-Design und Gameplay nahtlos zu integrieren.',
            en: 'The Last Symphony combines music and gameplay in an innovative way. The game uses audio frequencies as puzzle mechanics. Players must combine different tones and melodies to solve puzzles. The challenge was to seamlessly integrate audio design and gameplay.',
        },
        tags: ['Unity', 'Audio Design', 'Puzzle', 'C#', 'Music'],
        tech: ['Unity', 'C#', 'FMOD', 'Audio Programming'],
        images: [
            '/assets/projects/last-symphony-1.png',
            '/assets/projects/last-symphony-2.png',
            '/assets/projects/last-symphony-3.png',
        ],
    },
    'the-feast': {
        title: 'The Feast',
        category: 'Game Development',
        year: '2023',
        color: 'from-red-600 to-red-900',
        description: {
            de: 'Horror Cooking Experience mit einzigartiger Atmosphäre.',
            en: 'Horror cooking experience with unique atmosphere.',
        },
        longDescription: {
            de: 'The Feast ist ein Horror-Game mit einem ungewöhnlichen Setting: eine Küche. Das Spiel verbindet Cooking-Simulator-Mechaniken mit Horror-Elementen. Durch Sound Design, Lighting und subtile Storytelling-Elemente habe ich eine unheimliche Atmosphäre geschaffen.',
            en: 'The Feast is a horror game with an unusual setting: a kitchen. The game combines cooking simulator mechanics with horror elements. Through sound design, lighting, and subtle storytelling elements, I created an eerie atmosphere.',
        },
        tags: ['Unity', 'Horror', 'Simulation', 'Sound Design', 'Atmosphere'],
        tech: ['Unity', 'C#', 'Post-Processing', 'Audio Middleware'],
        images: [
            '/assets/projects/the-feast-1.png',
            '/assets/projects/the-feast-2.png',
            '/assets/projects/the-feast-3.png',
        ],
    },
    'petal-potions': {
        title: 'Petal Potions VR',
        category: 'VR / Game Development',
        year: '2024',
        color: 'from-green-400 to-emerald-600',
        description: {
            de: 'Immersiver VR Alchemy Simulator mit Handtracking.',
            en: 'Immersive VR alchemy simulator with hand tracking.',
        },
        longDescription: {
            de: 'Petal Potions VR ist ein VR-Spiel, in dem Spieler als Alchemist Tränke brauen. Mit Hand-Tracking können Spieler Zutaten greifen, mischen und magische Tränke erschaffen. Das Projekt war technisch anspruchsvoll, da VR-Interaktionen präzise und intuitiv sein müssen.',
            en: 'Petal Potions VR is a VR game where players brew potions as an alchemist. With hand tracking, players can grab ingredients, mix them, and create magical potions. The project was technically challenging as VR interactions must be precise and intuitive.',
        },
        tags: ['VR', 'Unity', 'Hand Tracking', 'Physics', 'XR Interaction'],
        tech: ['Unity', 'XR Interaction Toolkit', 'Oculus SDK', 'C#'],
        images: [
            '/images/pp_table.png',
            '/assets/projects/petal-potions-2.png',
            '/assets/projects/petal-potions-3.png',
        ],
    },
    'virtual-damage': {
        title: 'Virtual Damage',
        category: 'Bachelor Thesis',
        year: '2024-2025',
        color: 'from-red-500 to-pink-600',
        badge: { de: 'In Entwicklung', en: 'In Progress' },
        description: {
            de: 'Mein aktuelles Bachelorarbeit-Projekt - Coming Soon!',
            en: 'My current bachelor thesis project - Coming Soon!',
        },
        longDescription: {
            de: 'Virtual Damage ist mein Bachelorarbeit-Projekt und stellt den Höhepunkt meines Studiums dar. Das Projekt ist noch in Entwicklung, aber ich kann bereits sagen, dass es all meine Erfahrungen aus den letzten Jahren kombiniert. Mehr Details folgen bald!',
            en: 'Virtual Damage is my bachelor thesis project and represents the culmination of my studies. The project is still in development, but I can already say that it combines all my experiences from recent years. More details coming soon!',
        },
        tags: ['Bachelor Thesis', 'Unity', 'C#', 'Game Design', 'Research'],
        tech: ['Unity', 'C#', 'Advanced Systems', 'TBA'],
        images: [
            '/assets/projects/virtual-damage-1.png',
            '/assets/projects/virtual-damage-2.png',
            '/assets/projects/virtual-damage-3.png',
        ],
    },
    'letters-to-myself': {
        title: 'Letters To Myself',
        category: 'Serious Game',
        year: '2024',
        color: 'from-teal-400 to-blue-500',
        description: {
            de: 'Meaningful Serious Game über Mental Health Awareness.',
            en: 'Meaningful serious game about mental health awareness.',
        },
        longDescription: {
            de: 'Letters To Myself ist ein Serious Game, das sich mit Mental Health auseinandersetzt. Durch interaktives Storytelling und emotionale Narrative versucht das Spiel, Bewusstsein für mentale Gesundheit zu schaffen. Das Projekt war persönlich sehr bedeutend und hat mir gezeigt, wie Games als Medium für wichtige Themen dienen können.',
            en: 'Letters To Myself is a serious game that addresses mental health. Through interactive storytelling and emotional narratives, the game aims to create awareness for mental health. This project was personally very meaningful and showed me how games can serve as a medium for important topics.',
        },
        tags: ['Serious Game', 'Unity', 'Mental Health', 'Narrative', 'Interactive Story'],
        tech: ['Unity', 'C#', 'Ink Narrative', 'UI Design'],
        images: [
            '/assets/projects/letters-to-myself-1.png',
            '/assets/projects/letters-to-myself-2.png',
            '/assets/projects/letters-to-myself-3.png',
        ],
    },
};

export default function ProjectDetail() {
    const { id } = useParams();
    const { language, t } = useTranslation();

    if (!id || !projectsData[id as keyof typeof projectsData]) {
        return <Navigate to="/projects" replace />;
    }

    const project = projectsData[id as keyof typeof projectsData];

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-red-400 transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    {t('projects.back')}
                </Link>

                {/* Header */}
                <div className="mb-12 animate-fadeIn">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            {project.title}
                        </h1>
                        {'badge' in project && project.badge && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                                {project.badge[language]}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-zinc-400 mb-6">
                        <div className="flex items-center gap-2">
                            <Tag size={18} />
                            <span>{project.category}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{project.year}</span>
                        </div>
                    </div>

                    <p className="text-xl text-zinc-300 mb-8 max-w-3xl">
                        {project.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-300 text-sm"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </div>

                {/* Main Image */}
                <div className="mb-12 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                    <div className={`aspect-video bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden relative group`}>
                        <div className="absolute inset-0 bg-zinc-900/50 flex items-center justify-center">
                            <div className="text-8xl opacity-50">🎮</div>
                            {/* Replace with: <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Description */}
                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-3xl font-bold text-white mb-6">About This Project</h2>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                {project.longDescription[language]}
                            </p>
                        </div>

                        {/* Gallery */}
                        <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                            <h2 className="text-3xl font-bold text-white mb-6">Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((num) => (
                                    <div
                                        key={num}
                                        className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden group cursor-pointer"
                                    >
                                        <div className="w-full h-full flex items-center justify-center opacity-50">
                                            <span className="text-4xl">🎮</span>
                                        </div>
                                        {/* Replace with: <img src={`/assets/projects/${id}-${num}.png`} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Tech-Stack */}
                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                            <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                            <div className="space-y-2">
                                {project.tech.map((tech, i) => (
                                    <div
                                        key={i}
                                        className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-300 text-sm"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                            <h3 className="text-xl font-bold text-white mb-4">Links</h3>
                            <div className="space-y-3">
                            <a
                                href="#"
                                className="flex items-center gap-3 px-4 py-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-red-500/50 rounded-lg text-zinc-300 hover:text-red-400 transition-all group"
                                >
                                <Github size={20} />
                                <span className="flex-1">View on GitHub</span>
                                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a><a
                            href="#"
                            className="flex items-center gap-3 px-4 py-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-red-500/50 rounded-lg text-zinc-300 hover:text-red-400 transition-all group"
                            >
                            <ExternalLink size={20} />
                            <span className="flex-1">Live Demo</span>
                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Project Info */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
                    <div className="space-y-4 text-sm">
                        <div>
                            <span className="text-zinc-500">Year</span>
                            <p className="text-zinc-300 font-medium">{project.year}</p>
                        </div>
                        <div>
                            <span className="text-zinc-500">Category</span>
                            <p className="text-zinc-300 font-medium">{project.category}</p>
                        </div>
                        <div>
                            <span className="text-zinc-500">Role</span>
                            <p className="text-zinc-300 font-medium">Solo Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>
);
}