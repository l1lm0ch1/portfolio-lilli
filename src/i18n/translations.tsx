import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "de" | "en";

export const translations = {
    de: {
        'nav.home': 'Home',
        'nav.about': 'Über mich',
        'nav.projects': 'Projekte',
        'nav.hobbies': 'Hobbies',
        'nav.contact': 'Kontakt',
        'hero.greeting': 'Hallo, ich bin',
        'hero.title': 'Game Developer & Medientechnikerin',
        'hero.subtitle': 'Multipurpose Tool',
        'hero.description': 'Ich erschaffe digitale Welten durch Code, 3D Art und kreatives Design',
        'hero.cta': 'Mehr über mich',
        'hero.cta2': 'Meine Projekte',
        'hero.scroll': 'Scroll für mehr',
        'about.title': 'Über mich',
        'about.greeting': 'Hey! 👋',
        'about.intro': 'Ich bin Lilli Ölsinger, 21 Jahre alt aus Österreich. Derzeit studiere ich im 5. Semester Medientechnik und -Design mit Schwerpunkt Game Development an der FH Hagenberg.',
        'about.journey': 'Meine Reise begann im Gymnasium mit der ersten Faszination für die Spieleentwicklung. Nach meinem Abschluss in Elektronik und technischer Informatik an der HTL Leonding durfte ich auf der FH bereits mehrere vollwertige Games und Prototypen erschaffen.',
        'about.passion': 'Mein Ziel ist es, meine Träume in der Game Development Industrie zu verwirklichen und unvergessliche Spielerlebnisse zu schaffen.',
        'about.background': 'Mein Hintergrund',
        'about.htl': 'HTL Leonding - Elektronik & Technische Informatik',
        'about.fh': 'FH Hagenberg - Medientechnik & Design',
        'about.focus': 'Schwerpunkt: Game Development',
        'about.card1.title': 'Programmierung',
        'about.card1.desc': 'C#, C, Java, Python, JavaScript, VHDL',
        'about.card2.title': '3D & Design',
        'about.card2.desc': 'Unity, Unreal Engine, 3D Modeling, Game Art',
        'about.card3.title': 'Game Design',
        'about.card3.desc': 'Level Design, Prototyping, UX/UI',
        'projects.title': 'Meine Projekte',
        'projects.subtitle': 'Eine Reise von ersten VR Experimenten bis zum Bachelor',
        'projects.all': 'Alle Projekte',
        'projects.vr': 'VR Projekte',
        'projects.games': 'Games',
        'projects.ongoing': 'In Entwicklung',
        'projects.view': 'Details ansehen',
        'projects.back': 'Zurück zu Projekten',
        'hobbies.title': 'Was ich sonst so mache',
        'hobbies.subtitle': 'Wenn ich nicht gerade Games entwickle...',
        'hobbies.passion': 'Meine Leidenschaften außerhalb der Entwicklung',
        'contact.title': 'Lass uns connecten!',
        'contact.subtitle': 'Ich freue mich über neue Kontakte und spannende Projekte',
        'contact.email': 'E-Mail',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',
        'footer.rights': 'Alle Rechte vorbehalten',
        'footer.made': 'Gemacht mit',
        'footer.in': 'in Österreich',
        'cta.heading': 'Bereit mehr zu erfahren?',
        'cta.text': 'Entdecke meine Projekte und erfahre mehr über meine Reise in der Game Development Welt.',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.hobbies': 'Hobbies',
        'nav.contact': 'Contact',
        'hero.greeting': 'Hi, I\'m',
        'hero.title': 'Game Developer & Media Designer',
        'hero.subtitle': 'Multipurpose Tool',
        'hero.description': 'I create digital worlds through code, 3D art, and creative design',
        'hero.cta': 'More About Me',
        'hero.cta2': 'My Projects',
        'hero.scroll': 'Scroll for more',
        'about.title': 'About Me',
        'about.greeting': 'Hey! 👋',
        'about.intro': 'I\'m Lilli Ölsinger, 21 years old from Austria. Currently in my 5th semester studying Media Technology and Design with a focus on Game Development at FH Hagenberg.',
        'about.journey': 'My journey started in high school with my first fascination for game development. After graduating in Electronics and Computer Science at HTL Leonding, I\'ve created several full-fledged games and prototypes at university.',
        'about.passion': 'My goal is to realize my dreams in the game development industry and create unforgettable gaming experiences.',
        'about.background': 'My Background',
        'about.htl': 'HTL Leonding - Electronics & Computer Science',
        'about.fh': 'FH Hagenberg - Media Technology & Design',
        'about.focus': 'Focus: Game Development',
        'about.card1.title': 'Programming',
        'about.card1.desc': 'C#, C, Java, Python, JavaScript, VHDL',
        'about.card2.title': '3D & Design',
        'about.card2.desc': 'Unity, Unreal Engine, 3D Modeling, Game Art',
        'about.card3.title': 'Game Design',
        'about.card3.desc': 'Level Design, Prototyping, UX/UI',
        'projects.title': 'My Projects',
        'projects.subtitle': 'A journey from first VR experiments to my bachelor thesis',
        'projects.all': 'All Projects',
        'projects.vr': 'VR Projects',
        'projects.games': 'Games',
        'projects.ongoing': 'In Progress',
        'projects.view': 'View Details',
        'projects.back': 'Back to Projects',
        'hobbies.title': 'What I Do For Fun',
        'hobbies.subtitle': 'When I\'m not developing games...',
        'hobbies.passion': 'My passions outside of development',
        'contact.title': 'Let\'s Connect!',
        'contact.subtitle': 'I\'m always open to new contacts and exciting projects',
        'contact.email': 'Email',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',
        'footer.rights': 'All rights reserved',
        'footer.made': 'Made with',
        'footer.in': 'in Austria',
        'cta.heading': 'Ready to learn more?',
        'cta.text': 'Discover my projects and learn more about my journey in the game development world.',
    },
} as const;


// 3️⃣ Key-Typen automatisch ableiten
export type TranslationKeys = keyof typeof translations["de"];

// 4️⃣ Context-Typ
interface TranslationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKeys) => string;
}

// 5️⃣ Context erstellen (undefined, damit useTranslation Check erzwingt)
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// 6️⃣ Provider Props
interface TranslationProviderProps {
    children: ReactNode;
}

// 7️⃣ TranslationProvider
export function TranslationProvider({ children }: TranslationProviderProps) {
    const [language, setLanguage] = useState<Language>("de");

    const t = (key: TranslationKeys): string => {
        return translations[language][key] ?? key;
    };

    return (
        <TranslationContext.Provider value={{ language, setLanguage, t }}>
    {children}
    </TranslationContext.Provider>
);
}

// 8️⃣ Hook zum einfachen Zugriff
export function useTranslation(): TranslationContextType {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error("useTranslation must be used within a TranslationProvider");
    }
    return context;
}