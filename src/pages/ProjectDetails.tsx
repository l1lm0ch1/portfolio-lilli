import {useParams, Link, Navigate} from 'react-router-dom';
import {ArrowLeft, Github, Calendar, Tag} from 'lucide-react';
import {useTranslation} from '../i18n/translations';

type Project = {
    links?: Record<string, string>;
    description: Record<string, string>;
    longDescription: Record<string, string>;
    tags: string[];
    tech: string[];
    images: string[];
    badge?: Record<string, string>;
    title: string;
    category: string;
    year: string;
    color: string;
};

const projectsData = {
    'vr-avatar': {
        title: 'VR Chat Avatar',
        category: 'VR / 3D Modeling',
        year: '2020',
        color: 'from-purple-500 to-pink-500',
        links: {},
        description: {
            de: 'Mein erster Schritt in die 3D-Welt war die Erstellung eines Custom Avatars für VRChat. Hier habe ich gelernt, wie man mit VRoid Studio einfach Avatare für VRChat erstellen kann.',
            en: 'My first step into the 3D world was creating a custom avatar for VRChat. Here I learned how to create Avatars with VRoid studio for VRChat.',
        },
        longDescription: {
            de: 'Dieses Projekt war mein Einstieg in die Welt der VR-Entwicklung...',
            en: 'This project was my entry into the world of 3D modeling and VR development...',
        },
        tags: ['3D Modeling', 'VRChat', 'VRoid Studio', 'Unity', 'VRChat SDK'],
        tech: ['Blender', 'Unity', 'VRChat SDK'],
        images: [
            'images/vr-avatar-1.png',
            'images/vr-avatar-2.png',
            'images/vr-avatar-3.png',
        ],
    },
    'vr-world': {
        title: 'VR Chat World',
        category: 'VR / Level Design',
        year: '2021',
        color: 'from-blue-500 to-cyan-500',
        links: {},
        description: {
            de: 'Eine vollständige VR-Welt mit interaktiven Elementen und atmosphärischem Design.',
            en: 'A complete VR world with interactive elements and atmospheric design.',
        },
        longDescription: {
            de: 'Nach meinem ersten Avatar wollte ich eine eigene Welt erschaffen...',
            en: 'After my first avatar, I wanted to create my own world...',
        },
        tags: ['Level Design', 'VRChat', 'Unity', 'VRChat SDK', 'Lighting'],
        tech: ['Unity', 'VRChat SDK', 'ProBuilder'],
        images: [
            'images/vr-world-1.png',
            'images/vr-world-2.png',
            'images/vr-world-3.png',
        ],
    },
    'cozy-place': {
        title: 'My cozy place',
        category: 'Modelling',
        year: '2024',
        color: 'from-blue-500 to-cyan-500',
        links: {},
        description: {
            de: 'Meine Vorstellung eines "Cozy place".',
            en: 'My imagination of a "cozy place".',
        },
        longDescription: {
            de: 'Nach meinem ersten Avatar wollte ich eine eigene Welt erschaffen...',
            en: 'After my first avatar, I wanted to create my own world...',
        },
        tags: ['Autodesk Maya', '3D Modelling', 'Imagination', 'Cozy place', 'Lighting'],
        tech: ['Autodesk Maya'],
        images: [
            'images/cozy-place-1.jpg',
            'images/cozy-place-2.jpg',
            'images/cozy-place-3.jpg',
            'images/cozy-place-4.jpg',
        ],
    },
    'toon-architecture': {
        title: 'Toon Architecture',
        category: 'Modelling',
        year: '2024',
        color: 'from-blue-500 to-cyan-500',
        links: {},
        description: {
            de: 'Pokémon Center als Toon Architecture',
            en: 'Pokémon Center as toon architecture',
        },
        longDescription: {
            de: 'Dieses Projekt entstand im Rahmen des 3D-Design-Unterrichts...',
            en: 'This project was created as part of the 3D design course...',
        },
        tags: ['Autodesk Maya', '3D Modelling', 'Toon Architecture', 'Lighting'],
        tech: ['Autodesk Maya'],
        images: [
            'images/toon-arch-1.jpg',
            'images/toon-arch-2.png',
            'images/toon-arch-3.jpg',
        ],
    },
    'toy': {
        title: 'Toy',
        category: 'Modelling',
        year: '2024',
        color: 'from-blue-500 to-cyan-500',
        links: {},
        description: {
            de: 'Fiktiver "My Singing Robot" als Spielzeug',
            en: 'Fictional "My singing robot" as toy',
        },
        longDescription: {
            de: 'Dieses Projekt wurde ebenfalls im 3D-Design-Unterricht umgesetzt...',
            en: 'This project was also developed in the 3D design course...',
        },
        tags: ['Autodesk Maya', '3D Modelling', 'Toy', 'Lighting'],
        tech: ['Autodesk Maya'],
        images: [
            'images/toy-1.jpg',
            'images/toy-2.jpg',
            'images/toy-3.png',
            'images/toy-4.jpg',
        ],
    },
    'divine-meltdown': {
        title: 'Divine Meltdown Chpt. 1',
        category: 'Game Development',
        year: '2024',
        color: 'from-orange-500 to-red-500',
        links: {},
        description: {
            de: 'Story-getriebenes Adventure mit atmosphärischem Storytelling...',
            en: 'Story-driven adventure with atmospheric storytelling...',
        },
        longDescription: {
            de: 'Divine Meltdown ist ein narratives Adventure-Game...',
            en: 'Divine Meltdown is a narrative adventure game...',
        },
        tags: ['Unity', 'C#', 'Narrative Design', 'Sound Design', 'Puzzle'],
        tech: ['Unity', 'C#', 'Timeline', 'Cinemachine'],
        images: [
            'images/divine-meltdown-1.png',
            'images/divine-meltdown-2.png',
            'images/divine-meltdown-3.png',
        ],
    },
    'shadow-runner': {
        title: 'Shadow Runner',
        category: 'Game Development',
        year: '2024',
        color: 'from-gray-700 to-gray-900',
        links: {},
        description: {
            de: 'Schneller Action-Plattformer mit präzisem Movement-System.',
            en: 'Fast-paced action platformer with precise movement system.',
        },
        longDescription: {
            de: 'Shadow Runner ist ein 2D-Plattformer...',
            en: 'Shadow Runner is a 2D platformer...',
        },
        tags: ['Construct 3', 'Platformer', 'Game Feel', '2D'],
        tech: ['Construct 3'],
        images: [
            'images/shadow-runner-1.png',
            'images/shadow-runner-2.png',
            'images/shadow-runner-3.png',
        ],
    },
    'last-symphony': {
        title: 'The Last Symphony',
        category: 'Game Development',
        year: '2024',
        color: 'from-indigo-500 to-purple-600',
        links: {},
        description: {
            de: 'Puzzle-Adventure mit musikalischen Gameplay-Mechaniken.',
            en: 'Puzzle adventure with musical gameplay mechanics.',
        },
        longDescription: {
            de: 'The Last Symphony verbindet Musik und Gameplay auf innovative Weise...',
            en: 'The Last Symphony combines music and gameplay in an innovative way...',
        },
        tags: ['Unity', 'Audio Design', 'Puzzle', 'C#', 'Music'],
        tech: ['Unity', 'C#', 'FMOD', 'Audio Programming'],
        images: [
            'images/last-symphony-1.png',
            'images/last-symphony-2.png',
            'images/last-symphony-3.png',
        ],
    },
    'blurred-thoughts': {
        title: 'Blurred Thoughts (GameJam)',
        category: 'Game Development',
        year: '2024',
        color: 'from-indigo-500 to-purple-600',
        links: { github: 'https://github.com/l1lm0ch1/Blurry-Thoughts-Game.git' },
        description: {
            de: 'GameJam Titel mit dem Thema "Blast from the past".',
            en: 'GameJam title with the topic "Blast from the past".',
        },
        longDescription: {
            de: 'Dieses Game wurde im Rahmen des Hagenberger Game Jam 2024 entwickelt...',
            en: 'This game was developed during the Hagenberg Game Jam 2024...',
        },
        tags: ['Unity', 'Audio Design', 'Puzzle', 'C#', 'Music'],
        tech: ['Unity', 'C#', 'FMOD', 'Audio Programming'],
        images: [
            'images/blurred-thoughts.png',
            'images/blurred-thoughts-1.png',
            'images/blurred-thoughts-2.png',
            'images/blurred-thoughts-3.png',
        ],
    },
    'the-feast': {
        title: 'The Feast',
        category: 'Game Development',
        year: '2023',
        color: 'from-red-600 to-red-900',
        links: {},
        description: {
            de: 'Horror Online Mehrspieler Erfahrung mit einzigartiger Atmosphäre.',
            en: 'Horror online multiplayer experience with unique atmosphere.',
        },
        longDescription: {
            de: 'The Feast ist ein Online-Multiplayer-Horrorspiel...',
            en: 'The Feast is an online multiplayer horror game...',
        },
        tags: ['Unreal Engine 5', 'Horror', 'Simulation', 'Atmosphere', 'Blueprints'],
        tech: ['Unreal Engine 5', 'Blueprints'],
        images: [
            'images/the-feast.png',
            'images/the-feast-1.png',
            'images/the-feast-2.png',
            'images/the-feast-3.png',
        ],
    },
    'petal-potions': {
        title: 'Petal Potions VR',
        category: 'VR / Game Development',
        year: '2024',
        color: 'from-green-400 to-emerald-600',
        links: { github: 'https://github.com/l1lm0ch1/Petal-Potions.git' },
        description: {
            de: 'Immersiver VR Alchemy Simulator mit Handtracking.',
            en: 'Immersive VR alchemy simulator with hand tracking.',
        },
        longDescription: {
            de: 'Petal Potions VR ist ein VR-Spiel...',
            en: 'Petal Potions VR is a VR game...',
        },
        tags: ['VR', 'Unity', 'XR Interaction'],
        tech: ['Unity', 'XR Interaction Toolkit', 'Oculus SDK', 'C#'],
        images: [
            'images/petal-potions.png',
            'images/petal-potions-1.png',
            'images/petal-potions-2.png',
            'images/petal-potions-3.png',
        ],
    },
    'virtual-damage': {
        title: 'Virtual Damage',
        category: 'Bachelor Thesis',
        year: '2024-2025',
        color: 'from-red-500 to-pink-600',
        links: {},
        badge: { de: 'In Entwicklung', en: 'In Progress' },
        description: {
            de: 'Mein aktuelles Bachelorarbeit-Projekt - Coming Soon!',
            en: 'My current bachelor thesis project - Coming Soon!',
        },
        longDescription: {
            de: 'Dieses Projekt ist eine narrative VR-Experience...',
            en: 'This project is a narrative VR experience...',
        },
        tags: ['Bachelor Thesis', 'Unity', 'C#', 'Game Design', 'Research'],
        tech: ['Unity', 'C#', 'Advanced Systems', 'TBA'],
        images: [
            'images/virtual-damage-1.png',
            'images/virtual-damage-2.png',
            'images/virtual-damage-3.png',
        ],
    },
};


export default function ProjectDetail() {
    const {id} = useParams();
    const {language, t} = useTranslation();

    if (!id || !projectsData[id as keyof typeof projectsData]) {
        return <Navigate to="/projects" replace />;
    }

    const project = projectsData[id as keyof typeof projectsData] as Project;

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
                            <span key={i} className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-300 text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Main Image */}
                <div className="mb-12 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                    <div className={`aspect-video bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden relative group`}>
                        <div className="absolute inset-0 bg-zinc-900/50 flex items-center justify-center">
                            <img
                                src={project.images[0]}
                                alt={project.title ?? ''}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
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
                                {project.images.map((imgSrc, i) => (
                                    <div
                                        key={i}
                                        className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden group cursor-pointer"
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={`${project.title} ${i + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
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
                                    <div key={i} className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-300 text-sm">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                            <h3 className="text-xl font-bold text-white mb-4">Links</h3>
                            <div className="space-y-3">
                                {project.links?.github ? (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                                    >
                                        <Github size={18} />
                                        GitHub
                                    </a>
                                ) : (
                                    <span className="text-zinc-500 italic">No GitHub link available</span>
                                )}
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
                                    <p className="text-zinc-300 font-medium">Programmer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
