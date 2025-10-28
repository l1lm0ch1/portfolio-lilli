// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-4 text-center">
            <h1 className="text-8xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent animate-pulse">
                404
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-zinc-300">
                Ups… hier scheint etwas zu fehlen.
            </p>
            <p className="text-zinc-400 mb-8 max-w-lg">
                Ich bin Lilli Ölsinger, Game Developer & Media Designer.
                Diese Seite existiert leider nicht, aber du kannst meine Arbeit weiterhin entdecken.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
                Zurück zur Startseite
            </Link>
        </div>
    );
}
