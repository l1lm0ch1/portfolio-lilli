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
            de: 'Custom VRChat Avatare erstellt mit VRoid Studio und dem VRChat SDK.',
            en: 'Custom VRChat avatars created with VRoid Studio and the VRChat SDK.',
        },
        longDescription: {
            de: 'Während der Corona-Zeit habe ich mich intensiv mit VRChat beschäftigt und dabei meine ersten Schritte in die 3D-Welt gemacht. Mit VRoid Studio und dem VRChat SDK habe ich mehrere Custom-Charaktere erstellt und in Unity für VRChat konfiguriert. Dabei bin ich schnell auf ein technisches Problem gestoßen: Die Shoulder Bones des Rigs haben nicht gepasst, wodurch ich die Avatare in Blender nachbearbeiten und das Rig manuell korrigieren musste. Dieses Projekt hat mir gezeigt, wie wichtig ein sauberes Rig für Animationen und Interaktionen ist — eine Lektion, die ich in späteren Projekten immer wieder angewendet habe.',
            en: 'During the COVID lockdowns, I got deeply into VRChat and took my first steps into the 3D world. Using VRoid Studio and the VRChat SDK, I created several custom characters and configured them in Unity for VRChat. I quickly ran into a technical issue: the shoulder bones of the rig didn\'t align correctly, which required me to go into Blender and manually fix the rigging. This project taught me how critical clean rigging is for animations and interactions — a lesson I carried into every project that followed.',
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
            de: 'Eine eigene VRChat-Welt gebaut in Unity.',
            en: 'A custom VRChat world built in Unity.',
        },
        longDescription: {
            de: 'Nach meinen ersten Avataren wollte ich eine eigene Welt erschaffen. Ich habe mich dabei vollständig auf Unity konzentriert und Assets aus dem Unity Asset Store, Turbosquid sowie Texturen von CC0 Textures verwendet. Was anfangs wie ein simples Zusammenstellen von Assets wirkte, wurde schnell zur Lektion in Optimierung: Ich habe gelernt, wie entscheidend ein niedriger Polygon-Count für die Performance in VR ist, und wie sehr schlechte Optimierung die Erfahrung zerstören kann. Diese Erkenntnis hat mein Verständnis für Game-Art und Level Design nachhaltig geprägt.',
            en: 'After my first avatars, I wanted to create my own world. I worked entirely in Unity, sourcing assets from the Unity Asset Store, Turbosquid, and textures from CC0 Textures. What started as simple asset assembly quickly became a lesson in optimization: I learned how critical low polygon count is for VR performance, and how poor optimization can completely break the experience. This realization shaped my understanding of game art and level design going forward.',
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
            de: 'Ein persönlicher Gamer-Raum in Maya, mein erstes 3D-Modelling-Projekt an der FH Hagenberg.',
            en: 'A personal gamer room in Maya, my first 3D modelling project at the University of Applied Sciences Upper Austria.',
        },
        longDescription: {
            de: 'Cozy Place entstand im Rahmen des 3D-Kurses an der University of Applied Sciences Upper Austria und diente als erster Einstieg in Autodesk Maya. Ich habe mich dafür entschieden, einen persönlichen Gamer-Raum zu gestalten — klein, aber voller Details, die mir wichtig sind. Der Raum beinhaltet Poster von Spielen, die mir besonders viel bedeuten, sowie eine Referenz zu meiner eigenen Nintendo Wii. Als persönliches Highlight habe ich außerdem ein Prop-Katana eingebaut. Das Projekt hat mir gezeigt, wie man mit 3D-Modelling persönliche Geschichten erzählen kann.',
            en: 'Cozy Place was created as part of the 3D course at the University of Applied Sciences Upper Austria, serving as my first introduction to Autodesk Maya. I chose to design a personal gamer room — small, but full of details that matter to me. The room features posters of games I care deeply about, a reference to my own Nintendo Wii, and a prop katana as a personal highlight. This project showed me how 3D modelling can be used to tell personal stories.',
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
            de: 'Ein Pokémon Center im Toon-Stil, erstellt im 3D-Kurs an der FH Hagenberg.',
            en: 'A Pokémon Center in toon style, created for the 3D course at the University of Applied Sciences Upper Austria.',
        },
        longDescription: {
            de: 'Auch Toon Architecture entstand im 3D-Kurs an der University of Applied Sciences Upper Austria. Ich hatte die Aufgabenstellung anfangs falsch verstanden — aber anstatt mich davon aufhalten zu lassen, habe ich in kürzester Zeit ein vollständiges Pokémon Center aus dem Boden gestampft. Die Wahl fiel auf das Pokémon Center, da wir zu dem Zeitpunkt viel Pokémon Go gespielt haben und ich parallel Pokémon Schild auf der Nintendo Switch gezockt habe. Das Projekt war eine Übung in schneller Umsetzung unter Zeitdruck — und hat gezeigt, dass Kreativität und Motivation mehr wert sind als ein perfekter Plan.',
            en: 'Toon Architecture was also created for the 3D course at the University of Applied Sciences Upper Austria. I initially misunderstood the assignment — but instead of getting stuck, I quickly built a complete Pokémon Center from scratch. I chose the Pokémon Center because we were heavily into Pokémon Go at the time, and I was playing Pokémon Shield on my Nintendo Switch on the side. The project was an exercise in rapid execution under pressure — and proved that creativity and motivation are worth more than a perfect plan.',
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
            de: 'Ein kleiner singender Roboter in Maya mit verschiedenen Gesichtsausdrücken und Posen.',
            en: 'A small singing robot in Maya with different facial expressions and poses.',
        },
        longDescription: {
            de: 'Toy entstand ebenfalls im Rahmen des 3D-Kurses an der University of Applied Sciences Upper Austria. Nach einem ersten Blick auf Pinterest hatte ich schnell eine klare Vorstellung: ein kleiner singender Roboter — Audio not included. Ich habe das Modell in Autodesk Maya von Grund auf gebaut und dabei verschiedene Gesichtsausdrücke sowie Posen entwickelt, um dem Roboter Persönlichkeit und Leben einzuhauchen. Das Projekt war eine tolle Gelegenheit, Charakterdesign mit technischer Modellierung zu verbinden.',
            en: 'Toy was also created as part of the 3D course at the University of Applied Sciences Upper Austria. After a quick look on Pinterest, I had a clear vision: a small singing robot — audio not included. I built the model from scratch in Autodesk Maya, developing different facial expressions and poses to give the robot personality and life. The project was a great opportunity to combine character design with technical modelling.',
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
            de: 'Ein Action-Adventure über eine Halbgöttin, die magische Artefakte zurückerobert.',
            en: 'An action adventure about a demigod reclaiming magical artifacts from powerful gods.',
        },
        longDescription: {
            de: 'Divine Meltdown war mein erstes richtiges Gruppenspiel-Projekt. Ursprünglich als zeitbasierter Maze Runner geplant, hat sich das Konzept schnell zu einem Action-Adventure entwickelt. Inspiriert hat mich das Album "Renaissance" von Apashe, dessen Musik mir den perfekten Vibe für die Spielwelt vermittelt hat. Die Geschichte spielt in einer Welt voller Götter: Der Gottes-Älteste ist gestorben und hat mächtige magische Artefakte hinterlassen. Die stärksten Götter haben sich diese gekrallt, um noch mächtiger zu werden — was einen Krieg ausgelöst hat. Unsere Protagonistin, eine Halbgöttin, kämpft für das Gute und versucht, die Artefakte aus den falschen Händen zu befreien. Da mehrere vollständige Götter-Bossfights zu aufwändig gewesen wären, haben wir das Spiel theoretisch in mehrere Chapters aufgeteilt — daher der Name "Chapter 1". Als Entwicklerin war ich hauptverantwortlich für die gesamte Programmierung und das Game Design.',
            en: 'Divine Meltdown was my first real group game project. Originally planned as a time-based maze runner, the concept quickly evolved into an action adventure. My inspiration came from Apashe\'s album "Renaissance," whose music gave me the perfect vibe for the game world. The story takes place in a world of gods: the Elder God has died, leaving behind powerful magical artifacts. The strongest gods have seized them to become even more powerful, triggering a war. Our protagonist, a demigod, fights for good and sets out to reclaim the artifacts from the wrong hands. Since multiple full god boss fights would have been too much scope, we theoretically split the game into several chapters — hence the name "Chapter 1." As the main developer, I was responsible for all programming and game design.',
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
            de: 'Ein 2D-Plattformer in Construct 3, inspiriert von Fire Boy and Water Girl.',
            en: 'A 2D platformer in Construct 3, inspired by Fire Boy and Water Girl.',
        },
        longDescription: {
            de: 'Shadow Runner entstand im Rahmen des Game Design-Kurses an der University of Applied Sciences Upper Austria. Im Zweier-Team haben meine Kollegin und ich diesen 2D-Plattformer mit Construct 3 entwickelt, inspiriert von Fire Boy and Water Girl. Das Ziel ist simpel, aber befriedigend: Alle Shards einsammeln und ins nächste Level gelangen. Die Zusammenarbeit in einem kleinen Team und das Arbeiten mit Construct 3 haben mir gezeigt, wie schnell man mit den richtigen Tools ein spielbares Produkt auf die Beine stellen kann. Als Hauptentwicklerin habe ich die Mechaniken, das Level Design und die Spiellogik übernommen.',
            en: 'Shadow Runner was created as part of the Game Design course at the University of Applied Sciences Upper Austria. In a two-person team, my colleague and I developed this 2D platformer using Construct 3, inspired by Fire Boy and Water Girl. The goal is simple but satisfying: collect all shards and advance to the next level. Working in a small team and using Construct 3 showed me how quickly you can build a playable product with the right tools. As the main developer, I handled the mechanics, level design, and game logic.',
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
            de: 'Ein RPG über Clara, die das lokale Konzerthaus vor dem Abriss retten will.',
            en: 'An RPG about Clara trying to save the local concert hall from demolition.',
        },
        longDescription: {
            de: 'The Last Symphony handelt von Clara, einer passionierten Musikerin, die den Abriss des lokalen Konzerthauses verhindern möchte. Der arrogante Bürgermeister plant, es durch Wohnhäuser und neue Infrastruktur zu ersetzen. Clara macht sich auf den Weg, andere Musiker davon zu überzeugen, ihr zu folgen und gemeinsam ein großes Konzert zu veranstalten. Dabei stößt sie auf verschiedene persönliche Hürden der Musiker, die diese vom Spielen abhalten. Am Ende gelingt das Konzert — und der Bürgermeister bekommt von seiner Frau eine gehörige Standpauke. Der Artstyle ist von Honkai: Star Rail inspiriert. Für die Charaktere haben wir VRoid Studio verwendet — dabei haben wir jedoch gelernt, dass VRoid Studio-Modelle schlecht für Unity-Animationen geeignet sind: Mixamo-Animationen haben mit dem Rig nicht harmoniert, was zu schlechten Animationen und einem teils im Boden steckenden Spieler geführt hat. Als Hauptentwicklerin habe ich die gesamte Programmierung sowie das Game Design verantwortet.',
            en: 'The Last Symphony follows Clara, a passionate musician trying to prevent the demolition of the local concert hall. The arrogant mayor plans to replace it with housing and new infrastructure. Clara sets out to convince other musicians to join her and hold a grand concert together. Along the way, she encounters personal struggles of each musician that prevent them from playing. In the end, the concert succeeds — and the mayor receives a stern lecture from his wife. The art style is inspired by Honkai: Star Rail. We used VRoid Studio for the characters — where we learned the hard way that VRoid models are poorly suited for Unity animations: Mixamo animations didn\'t work well with the rig, resulting in poor animations and a player character that sometimes sank into the floor. As the main developer, I was responsible for all programming and game design.',
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
            de: 'Ein düsteres First-Person Escape Room Spiel vom Hagenberg Game Jam 2024.',
            en: 'A dark first-person escape room game from the Hagenberg Game Jam 2024.',
        },
        longDescription: {
            de: 'Blurred Thoughts ist ein düsteres First-Person Escape Room Puzzle-Spiel, das beim Hagenberg Game Jam 2024 entstanden ist. Das Thema lautete "Blast from the Past". In nur zwei Tagen haben wir als fünfköpfiges Team dieses Spiel entwickelt — angetrieben von Energy Drinks, Kaffee, dem obligatorischen McDonald\'s-Break und sogar einer dreistündigen Rave-Party um Mitternacht. Nebenbei haben wir das Spiel direkt gespeedrunnt, leider ohne unsere Zeiten festzuhalten. Die Geschichte beginnt in einem alten Klassenzimmer: Die Protagonistin erwacht ohne jede Erinnerung an ihre Identität. VHS-Kassetten enthüllen nach und nach Fragmente ihrer Vergangenheit. Im letzten Level kommt es zum Höhepunkt: Die letzte Kassette rät schlicht: "Take it off." Der Spieler zieht das VR-Headset im Spiel aus — und findet sich plötzlich in einer hellen, bunten Umgebung wieder. Die Auflösung: Die Protagonistin war Teil eines Therapieprogramms zur Behandlung von Gedächtnisverlust. Das Spiel endet im Büro eines Therapeuten — ein Symbol für Heilung und Selbstentdeckung. Für mich war Blurred Thoughts eine Lektion in kreativem Arbeiten unter extremem Zeitdruck. Wir haben Platz 4 von 15 Teams belegt.',
            en: 'Blurred Thoughts is a dark first-person escape room puzzle game created at the Hagenberg Game Jam 2024, under the theme "Blast from the Past." In just two days, our five-person team built this game — fueled by energy drinks, coffee, the mandatory McDonald\'s break, and even a three-hour rave party at midnight. We also started speedrunning it on the side, though sadly we never wrote down our times. The story begins in an old classroom, where the protagonist wakes up with no memory of who they are. VHS tapes slowly reveal fragments of their past. The climax arrives in the final level, when the last tape simply advises: "Take it off." The player removes their VR headset in-game — and suddenly finds themselves in a bright, colorful environment. The reveal reframes everything: the protagonist was part of a specialized therapy program for memory recovery. The game ends in a therapist\'s office, symbolizing healing and self-discovery. Blurred Thoughts taught me a lot about rapid prototyping, narrative design, and how atmosphere can carry a game just as strongly as mechanics. We ranked 4th out of 15 teams.',
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
            de: 'Ein Multiplayer-Horrorspiel in Unreal Engine, inspiriert von Phasmophobia und Dead by Daylight.',
            en: 'A multiplayer horror game in Unreal Engine, inspired by Phasmophobia and Dead by Daylight.',
        },
        longDescription: {
            de: 'The Feast war mein erstes Unreal Engine Spiel. Inspiriert von Phasmophobia (das ich zu dem Zeitpunkt mit einem Mitarbeitenden intensiv gespielt habe) und den Skillchecks aus Dead by Daylight, handelt das Spiel davon, Monster in einem verwunschenen Haus ausfindig zu machen und zu exorzieren. Das Spiel unterstützt Multiplayer dank des Steam Subnets, das sich in Unreal Engine überraschend unkompliziert integrieren ließ. Das Spiel wurde hauptsächlich mit Unreal Engine Blueprints entwickelt. Der Multiplayer war meine persönliche Hauptverantwortung — was mir tiefe Einblicke in Netzwerkarchitektur und Synchronisierung gegeben hat.',
            en: 'The Feast was my first Unreal Engine game. Inspired by Phasmophobia (which I was intensely playing with a teammate at the time) and the skill checks from Dead by Daylight, the game is about tracking down monsters in a haunted house and exorcising them. The game supports multiplayer thanks to Steam Subnets, which integrated into Unreal Engine surprisingly smoothly. The game was primarily developed using Unreal Engine Blueprints. Multiplayer was my personal main responsibility — giving me deep insight into network architecture and synchronization.',
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
            de: 'Ein VR Flower Farming und Potion Crafting Simulator, inspiriert von Slime Rancher und Stardew Valley.',
            en: 'A VR flower farming and potion crafting simulator, inspired by Slime Rancher and Stardew Valley.',
        },
        longDescription: {
            de: 'Petal Potions war mein erstes richtiges VR-Spiel und ist bis heute eines meiner liebsten Projekte. Zusammen mit einer Studienkollegin haben wir einen charmanten Flower Farming und Potion Crafting Simulator entwickelt — inspiriert von Slime Rancher und Stardew Valley. Der cutesy Artstyle in Kombination mit dem Potion Crafting Gameplay war von Anfang an unsere Vision. Die Aufgabenteilung war klar: Ich habe sämtliche Systeme in C# entwickelt, während meine Kollegin alle 3D- und 2D-Assets von Grund auf selbst erstellt hat. Fast wäre auch ein Player Character dabei gewesen — das Modell gibt es sogar! — aber am Ende fehlte schlicht die Zeit, ihn noch einzubauen.',
            en: 'Petal Potions was my first real VR game and remains one of my favorite projects to this day. Together with a fellow student, we developed a charming flower farming and potion crafting simulator — inspired by Slime Rancher and Stardew Valley. The cute art style combined with potion crafting gameplay was our vision from the start. The division of work was clear: I developed all systems in C#, while my colleague created all 3D and 2D assets entirely from scratch. We almost had a full player character too — the model actually exists! — but in the end, we simply ran out of time to include it.',
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
        'approaches-to-enhancing-immersion': {
        title: 'Approaches to Enhancing Immersion in Virtual Reality Through Physical Object Integration',
        category: 'Bachelor Thesis',
        year: '2024-2025',
        color: 'from-red-500 to-pink-600',
        links: {},
        badge: { de: 'Abgeschlossen', en: 'Completed' },
        description: {
            de: 'Bachelorarbeit über Immersionsverbesserung in VR durch physische Objektintegration.',
            en: 'Bachelor thesis on enhancing immersion in VR through physical object integration.',
        },
        longDescription: {
            de: 'Diese Bachelorarbeit untersucht, wie die Integration physischer Objekte mit einem hybriden Tracking-System die Immersion in VR verbessert. Der entwickelte Prototyp kombiniert einen Arduino Mega 2560 mit Arcade-Buttons und Slidern als interaktive Reaktionswand sowie ArUco Marker-basiertes Tracking auf Würfeln für eine Sorting Task — die Objekt-Erkennung erfolgt über Unity Collision Detection. Das System wurde im Kontext von VR Escape Rooms entwickelt und durch eine qualitative Experten-Evaluation mit drei Fachexperten bewertet. Ich habe den gesamten Prototypen entwickelt; eine Studienkollegin hat die Assets erstellt und durfte den Prototypen dafür mitnutzen. Nachträglich musste ich zusätzlich noch eine VR-Only Version ohne physische Objekte für sie entwickeln — was einmal mehr gezeigt hat, wie wichtig es ist, Absprachen im Voraus zu 100% zu klären, bevor der Time Crunch einsetzt.',
            en: 'This bachelor thesis investigates how the integration of physical objects with a hybrid tracking system enhances immersion in VR. The developed prototype combines an Arduino Mega 2560 with arcade buttons and sliders as an interactive reaction wall, alongside ArUco marker-based tracking on cubes for a sorting task — with object recognition handled through Unity collision detection. The system was developed in the context of VR escape rooms and evaluated through a qualitative expert evaluation with three domain experts. I developed the entire prototype; a fellow student created the assets and was permitted to use the prototype in return. Afterward, I also had to develop an additional VR-only version without physical objects for her — which once again demonstrated how critical it is to clarify all agreements 100% upfront before the time crunch kicks in.',
        },
        tags: ['Bachelor Thesis', 'VR', 'Unity', 'C#', 'Arduino', 'ArUco', 'Research', 'Haptic Feedback'],
        tech: ['Unity 6', 'C#', 'Arduino', 'XR Interaction Toolkit', 'OpenCV', 'Meta Quest 2'],
        images: [
            'images/bachelor-thesis-1.png',
            'images/bachelor-thesis-2.png',
            'images/bachelor-thesis-3.png',
        ],
    },

    'archangel-vr': {
        title: 'Archangel VR',
        category: 'VR Game',
        year: '2024-2025',
        color: 'from-purple-500 to-indigo-600',
        links: {},
        description: {
            de: 'Ein story-getriebenes VR-Spiel über einen Soldaten der einen Flugzeugabsturz überlebt.',
            en: 'A story-driven VR game about a soldier who survives a plane crash.',
        },
        longDescription: {
            de: 'Archangel VR ist ein story-getriebenes VR-Spiel, das im Rahmen eines Semesterprojekts an der University of Applied Sciences Upper Austria entstanden ist. Die Geschichte folgt einem Soldaten, der einen Flugzeugabsturz überlebt und sich in einer unbekannten Situation wiederfindet. Das Spiel beinhaltet ein modulares XR-System mit konfigurierbaren Locomotion-Modi, Hinge Joint-basierte Türmechaniken, ein Carrying-System und vollständige VR Arm-Rigging-Integration. Als Hauptentwicklerin habe ich sämtliche Systeme programmiert und das Projekt von der Konzeption bis zur fertigen Demo begleitet.',
            en: 'Archangel VR is a story-driven VR game created as part of a semester project at the University of Applied Sciences Upper Austria. The story follows a soldier who survives a plane crash and finds himself in an unknown situation. The game features a modular XR system with configurable locomotion modes, Hinge Joint-based door mechanics, a carrying system, and full VR arm rigging integration. As the main developer, I programmed all systems and guided the project from concept to finished demo.',
        },
        tags: ['VR', 'Unity', 'C#', 'Game Design', 'XR Interaction Toolkit', 'Locomotion'],
        tech: ['Unity 6', 'C#', 'XR Interaction Toolkit', 'Meta Quest 2', 'Cinemachine'],
        images: [
            'images/archangel-vr-1.png',
            'images/archangel-vr-2.png',
            'images/archangel-vr-3.png',
        ],
    },
    'letters-to-myself': {
        title: 'Letters to Myself',
        category: 'Game Development',
        year: '2024-2025',
        color: 'from-teal-400 to-blue-500',
        links: {},
        description: {
            de: 'Ein Serious Game über Mental Health, entstanden im Rahmen von "Games with a Purpose".',
            en: 'A serious game about mental health, created as part of "Games with a Purpose".',
        },
        longDescription: {
            de: 'Letters to Myself entstand im Rahmen des Kurses "Games with a Purpose" an der University of Applied Sciences Upper Austria. Das Spiel ist ein narratives Serious Game, das sich auf einfühlsame Weise mit mentaler Gesundheit auseinandersetzt. Der Spieler beginnt in einem leeren Raum und findet Briefe, die scheinbar von ihm selbst stammen. Nach dem Dekorieren der Briefe mit Stickern und Briefpapier werden diese abgeschickt und manifestieren Objekte im Raum — jeder Brief entfaltet ein Stück Backstory. Das Spiel verbindet 3D-Exploration mit einem 2D-Decorations-Interface, einem Tag-Nacht-Zyklus und emotionalen Easter Eggs. Als Hauptentwicklerin habe ich alle Systeme in C# programmiert sowie Konzept und Game Design verantwortet.',
            en: 'Letters to Myself was created as part of the "Games with a Purpose" course at the University of Applied Sciences Upper Austria. The game is a narrative serious game that addresses mental health in an empathetic way. The player starts in an empty room and finds letters that appear to come from themselves. After decorating the letters with stickers and stationery, they are sent away and manifest objects in the room — each letter unfolds a piece of backstory. The game combines 3D exploration with a 2D decoration interface, a day-night cycle, and emotional Easter eggs. As the main developer, I programmed all systems in C# and was responsible for the concept and game design.',
        },
        tags: ['Serious Game', 'Unity', 'C#', 'Mental Health', 'Narrative Design', 'Game Design'],
        tech: ['Unity 6', 'C#', 'Cinemachine'],
        images: [
            'images/letters-to-myself-1.png',
            'images/letters-to-myself-2.png',
            'images/letters-to-myself-3.png',
            'images/letters-to-myself-4.png',
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
