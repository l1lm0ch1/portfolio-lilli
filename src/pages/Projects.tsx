import {useState} from 'react';
import {Link} from 'react-router-dom';
import {ExternalLink, Filter} from 'lucide-react';
import {useTranslation} from '../i18n/translations';

const projectsData = [
    {
        id: 'vr-avatar',
        title: 'VR Chat Avatar',
        category: 'VR',
        description: {
            de: 'Mein erster Schritt in die 3D-Welt - Custom Avatar Design für VRChat',
            en: 'My first step into the 3D world - Custom avatar design for VRChat'
        },
        year: '2020',
        color: 'from-purple-500 to-pink-500',
        tags: ['3D Modeling', 'VRChat', 'Blender'],
    },
    {
        id: 'vr-world',
        title: 'VR Chat World',
        category: 'VR',
        description: {
            de: 'Kreation einer vollständigen VR-Welt mit interaktiven Elementen',
            en: 'Creation of a complete VR world with interactive elements'
        },
        year: '2021',
        color: 'from-blue-500 to-cyan-500',
        tags: ['Level Design', 'VRChat', 'Unity'],
    },
    {
        id: 'divine-meltdown',
        title: 'Divine Meltdown Chpt. 1',
        category: 'Game',
        description: {
            de: 'Story-getriebenes Adventure mit atmosphärischem Storytelling',
            en: 'Story-driven adventure with atmospheric storytelling'
        },
        year: '2024',
        color: 'from-orange-500 to-red-500',
        tags: ['Unity', 'C#', 'Narrative Design'],
    },
    {
        id: 'shadow-runner',
        title: 'Shadow Runner',
        category: 'Game',
        description: {
            de: 'Action-Plattformer erstellt in Construct 3',
            en: 'Action platformer created in Construct 3'
        },
        year: '2024',
        color: 'from-gray-700 to-gray-900',
        tags: ['Construct 3', 'Platformer'],
    },
    {
        id: 'last-symphony',
        title: 'The Last Symphony',
        category: 'Game',
        description: {
            de: 'Puzzle-Adventure mit musikalischen Gameplay-Mechaniken',
            en: 'Puzzle adventure with musical gameplay mechanics'
        },
        year: '2024',
        color: 'from-indigo-500 to-purple-600',
        tags: ['Unity', 'C#', 'RPG'],
    },
    {
        id: 'the-feast',
        title: 'The Feast',
        category: 'Game',
        description: {
            de: 'Online Horror Mehrspieler Spiel',
            en: 'Online Horror Multiplayer Game'
        },
        year: '2025',
        color: 'from-red-600 to-red-900',
        tags: ['Unreal Engine 5', 'Horror', 'Simulation'],
    },
    {
        id: 'petal-potions',
        title: 'Petal Potions VR',
        category: 'VR',
        description: {
            de: 'Immersiver VR Potion making Simulator im Fee-Stil',
            en: 'Immersive VR potion crafting simulator in fae-style'
        },
        year: '2025',
        color: 'from-green-400 to-emerald-600',
        tags: ['VR', 'Unity', 'Interactive Game'],
    },
    {
        id: 'virtual-damage',
        title: 'virtual-damage',
        category: 'Game',
        description: {
            de: 'Aktuelles Semesterprojekt - WIP',
            en: 'Current Semester project - WIP'
        },
        year: '2025',
        badge: {de: 'In Entwicklung', en: 'In Progress'},
        color: 'from-red-500 to-pink-600',
        tags: ['VR', 'Unity', 'C#', 'Hand tracking'],
    },
    {
        id: 'virtual-damage',
        title: 'Approaches to Enhancing Immersion in VR via physical Object tracking',
        category: 'Game',
        description: {
            de: 'Mein aktuelles Bachelorarbeit-Projekt - Coming Soon!',
            en: 'My current bachelor thesis project - Coming Soon!'
        },
        year: '2025',
        badge: {de: 'In Entwicklung', en: 'In Progress'},
        color: 'from-red-500 to-pink-600',
        tags: ['Bachelor Thesis', 'Unity', 'C#'],
    },
    {
        id: 'letters-to-myself',
        title: 'Letters To Myself',
        category: 'Game',
        description: {
            de: 'Meaningful Serious Game über Mental Health Awareness',
            en: 'Meaningful serious game about mental health awareness'
        },
        year: '2025',
        color: 'from-teal-400 to-blue-500',
        tags: ['Serious Game', 'Unity', 'C#', 'Mental Health'],
    },
];

export default function Projects() {
    const {language, t} = useTranslation();
    const [filter, setFilter] = useState<'all' | 'VR' | 'Game'>('all');

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center animate-fadeIn">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        {t('projects.title')}
                    </h1>
                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-8">{t('projects.subtitle')}</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* Filter */}
                <div className="mb-12 flex justify-center animate-fadeIn" style={{animationDelay: '0.1s'}}>
                    <div
                        className="inline-flex items-center gap-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-2">
                        <Filter size={20} className="text-zinc-400 ml-2"/>
                        {[
                            {value: 'all', label: t('projects.all')},
                            {value: 'VR', label: t('projects.vr')},
                            {value: 'Game', label: t('projects.games')},
                        ].map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setFilter(option.value as any)}
                                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                                    filter === option.value
                                        ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
                                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                                }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Link
                            key={project.id}
                            to={`/projects/${project.id}`}
                            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-fadeIn"
                            style={{animationDelay: `${0.1 + index * 0.05}s`}}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                            <div className="relative z-10 p-6">
                                {project.badge && (
                                    <div
                                        className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-xs mb-4">
                    <span className="relative flex h-2 w-2">
                      <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                                        {project.badge[language]}
                                    </div>
                                )}

                                <div
                                    className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                                    <div className="text-6xl opacity-50">🎮</div>
                                    {/* Replace with: <img src={`/assets/projects/${project.id}.png`} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /> */}
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-red-400 font-medium mb-3">{project.category}</p>
                                    <p className="text-zinc-400 mb-4 leading-relaxed">
                                        {project.description[language]}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 bg-zinc-800/50 border border-zinc-700 rounded text-zinc-400"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-zinc-500 font-mono">{project.year}</span>
                                    <span
                                        className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 text-sm">
                    {t('projects.view')}
                                        <ExternalLink size={14}/>
                  </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}