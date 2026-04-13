import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, Calendar, Tag } from 'lucide-react';
import { useTranslation } from '../i18n/translations';

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
            de: 'Custom VRChat Avatare — weil man auch in VR gut aussehen muss.',
            en: 'Custom VRChat avatars — because looking good in VR is non-negotiable.',
        },
        longDescription: {
            de: 'Corona. Lockdown. Was macht man? Richtig — man baut sich einen virtuellen Körper und hängt mit Fremden in VR ab. Meine ersten Schritte in die 3D-Welt waren weniger glamourös als erhofft: VRoid Studio, das VRChat SDK, Unity — und dann die ernüchternde Entdeckung, dass die Shoulder Bones meines Rigs aussahen, als hätte jemand einen Wäscheständer falsch zusammengebaut. Ab nach Blender, Rig manuell korrigieren, und dabei die wichtigste Lektion des 3D-Lebens gelernt: Ein schlechtes Rig ist wie ein schlechtes Fundament. Alles, was drauf aufbaut, leidet.',
            en: 'Corona. Lockdown. What does one do? Correct — you build yourself a virtual body and hang out with strangers in VR. My first steps into the 3D world were less glamorous than anticipated: VRoid Studio, the VRChat SDK, Unity — and then the humbling discovery that my rig\'s shoulder bones looked like someone had assembled a coat rack wrong. Off to Blender, manually fix the rig, and in doing so learn the most important lesson of 3D life: a bad rig is like a bad foundation. Everything built on top of it suffers.',
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
            de: 'Eine eigene VRChat-Welt — denn warum in fremden Welten rumhängen, wenn man eine eigene bauen kann?',
            en: 'A custom VRChat world — because why hang out in someone else\'s world when you can build your own?',
        },
        longDescription: {
            de: 'Nach den Avataren war der nächste logische Schritt: eine eigene Welt. Assets aus dem Unity Asset Store, Turbosquid und CC0 Textures zusammengeworfen — was sich anfangs anfühlte wie eine IKEA-Lieferung auf Steroiden. Der erste Prototyp war technisch ein Desaster. Nicht weil er hässlich war, sondern weil er bei jedem zweiten Schritt einbrach wie ein Soufflé. VR und schlechte Performance vertragen sich ungefähr so gut wie Katzen und Wasser. Polygon Count wurde mein neues Lieblingswort, Optimierung mein ungeliebtes Hobby — und am Ende stand eine Welt, die tatsächlich lief.',
            en: 'After the avatars, the next logical step: build a world. Throwing together assets from the Unity Asset Store, Turbosquid, and CC0 Textures felt at first like an IKEA delivery on steroids. The first prototype was technically a disaster — not because it was ugly, but because it tanked every two steps like a collapsing soufflé. VR and poor performance mix about as well as cats and water. Polygon count became my new favorite word, optimization my reluctant hobby — and in the end, I had a world that actually ran.',
        },
        tags: ['Level Design', 'VRChat', 'Unity', 'VRChat SDK', 'Lighting'],
        tech: ['Unity', 'VRChat SDK', 'ProBuilder'],
        images: [
            'images/vr-world-1.png',
            'images/vr-world-2.png',
        ],
    },
    'cozy-place': {
        title: 'My cozy place',
        category: 'Modelling',
        year: '2024',
        color: 'from-blue-500 to-cyan-500',
        links: {},
        description: {
            de: 'Ein Gamer-Zimmer in Maya — klein, persönlich, und mit einem Katana das eigentlich niemand braucht.',
            en: 'A gamer room in Maya — small, personal, and featuring a katana nobody asked for.',
        },
        longDescription: {
            de: 'Erstes Projekt an der FH Hagenberg, erstes Mal Autodesk Maya. Die Aufgabe: irgendwas modellieren. Meine Lösung: natürlich mein eigenes Gamer-Zimmer nachbauen, inklusive Postern von Spielen, die mich geprägt haben, einer Referenz zu meiner Nintendo Wii — und einem Prop-Katana, das ich aus rein ästhetischen Gründen eingebaut habe und für das ich mich nicht entschuldige. Das Projekt hat mir gezeigt, dass 3D-Modelling nicht nur Technik ist, sondern eine Möglichkeit, kleine persönliche Geschichten zu erzählen. Auch wenn diese Geschichte hauptsächlich "ich sitze gerne in meinem Zimmer und zocke" lautet.',
            en: 'First project at university, first time using Autodesk Maya. The assignment: model something. My solution: obviously recreate my own gamer room, complete with posters of games that shaped me, a nod to my Nintendo Wii — and a prop katana I added for purely aesthetic reasons and refuse to apologize for. This project showed me that 3D modelling isn\'t just about technique, it\'s a way to tell small personal stories. Even if that story is mostly "I like sitting in my room and gaming."',
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
            de: 'Ein Pokémon Center im Toon-Stil — entstanden aus einem Missverständnis und fertiggestellt aus reiner Sturheit.',
            en: 'A Pokémon Center in toon style — born from a misunderstanding, finished out of pure stubbornness.',
        },
        longDescription: {
            de: 'Ich hatte die Aufgabenstellung falsch verstanden. Statt in Panik zu verfallen, habe ich einfach ein komplettes Pokémon Center aus dem Nichts gestampft — weil wir zu dem Zeitpunkt obsessiv Pokémon Go gespielt haben und ich nebenbei Pokémon Schild auf der Nintendo Switch durchgezockt habe. Das Pokémon Center war die einzig logische Wahl. Was dabei rausgekommen ist: ein Beweis dafür, dass Zeitdruck manchmal der beste Kreativitätsbooster ist. Und dass man mit genug Motivation auch ohne perfekten Plan ans Ziel kommt.',
            en: 'I misunderstood the assignment. Instead of panicking, I just built a complete Pokémon Center from scratch — because at the time we were obsessively playing Pokémon Go and I was working through Pokémon Shield on my Nintendo Switch on the side. The Pokémon Center was the only logical choice. What came out of it: proof that time pressure is sometimes the best creativity booster. And that with enough motivation, you can reach the finish line even without a perfect plan.',
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
            de: 'Ein singender Roboter in Maya. Audio not included.',
            en: 'A singing robot in Maya. Audio not included.',
        },
        longDescription: {
            de: 'Kurzer Blick auf Pinterest, sofort eine Idee: kleiner Roboter, singt, hat Persönlichkeit. Audio not included — das musste ich leider selbst ergänzen. Ich habe das Modell von Grund auf in Autodesk Maya gebaut und dabei besonders viel Zeit in die Gesichtsausdrücke und Posen investiert, weil ein Roboter ohne Ausdruck einfach nur ein Haushaltsgerät ist. Das Ergebnis ist ein kleiner Typ mit viel Energie und null Scham — also eigentlich mein Lieblingstyp.',
            en: 'Quick look at Pinterest, immediate idea: small robot, sings, has personality. Audio not included — I had to add that disclaimer myself. I built the model from scratch in Autodesk Maya and spent a disproportionate amount of time on the facial expressions and poses, because a robot without expression is just an appliance. The result is a little guy with a lot of energy and zero shame — honestly, my favorite type.',
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
            de: 'Eine Halbgöttin. Gefallene Götter. Magische Artefakte. Und ein Soundtrack, der eigentlich das ganze Spiel trägt.',
            en: 'A demigod. Fallen gods. Magical artifacts. And a soundtrack that honestly carries the whole game.',
        },
        longDescription: {
            de: 'Was als zeitbasierter Maze Runner geplant war, hat sich schnell zu einem vollwertigen Action-Adventure gemausert — weil gute Ideen sich eben nicht aufhalten lassen. Die Inspiration: Apashes Album "Renaissance". Wenn Musik so klingt, baut man eine Welt drumherum, fertig. Die Story: Der Gott-Älteste ist tot, seine mächtigsten Artefakte kursieren bei den falschen Leuten, und unsere Halbgöttin hat beschlossen, das zu korrigieren — mit Gewalt, falls nötig. Mehrere vollständige Götter-Bossfights wären zu viel Scope gewesen, also haben wir das Spiel theoretisch in Chapters aufgeteilt. "Chapter 1" klingt außerdem deutlich ambitionierter als "das einzige Chapter". Als Hauptentwicklerin war ich für Programmierung und Game Design verantwortlich — und dafür, dass das Spiel trotz ambitionierter Vision auch tatsächlich spielbar wurde.',
            en: 'What started as a time-based maze runner quickly evolved into a full action adventure — because good ideas don\'t let themselves be contained. The inspiration: Apashe\'s album "Renaissance." When music sounds like that, you just build a world around it. The story: the Elder God is dead, his most powerful artifacts are in the wrong hands, and our demigod has decided to fix that — by force if necessary. Multiple full god boss fights would have been too much scope, so we theoretically split the game into chapters. "Chapter 1" also sounds significantly more ambitious than "the only chapter." As the main developer, I was responsible for programming and game design — and for making sure the game actually became playable despite the ambitious vision.',
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
            de: 'Ein 2D-Plattformer in Construct 3 — Shards einsammeln, nicht sterben, Level gewinnen. Simpel. Befriedigend.',
            en: 'A 2D platformer in Construct 3 — collect shards, don\'t die, beat the level. Simple. Satisfying.',
        },
        longDescription: {
            de: 'Fire Boy and Water Girl war die Inspiration, Construct 3 das Werkzeug, und eine Studienkollegin war meine Komplizin. Das Ziel ist denkbar simpel: Shards einsammeln, ins nächste Level. Keine komplizierte Story, kein tiefes Lore — nur gutes, ehrliches Plattformer-Gameplay. Was mich dabei am meisten überrascht hat: Wie schnell man mit den richtigen Tools ein spielbares Produkt auf die Beine stellen kann. Construct 3 ist in dieser Hinsicht fast schon unfair einfach. Als Hauptentwicklerin habe ich Mechaniken, Level Design und Spiellogik übernommen — und dabei gelernt, dass manchmal weniger Komplexität einfach mehr Spaß macht.',
            en: 'Fire Boy and Water Girl was the inspiration, Construct 3 was the tool, and a fellow student was my accomplice. The goal is beautifully simple: collect shards, reach the next level. No complicated story, no deep lore — just good, honest platformer gameplay. What surprised me most: how quickly you can get a playable product off the ground with the right tools. Construct 3 is almost unfairly fast in that regard. As the main developer, I handled mechanics, level design, and game logic — and learned that sometimes less complexity just means more fun.',
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
            de: 'Clara will das Konzerthaus retten. Der Bürgermeister will Wohnblöcke. Spoiler: Clara gewinnt.',
            en: 'Clara wants to save the concert hall. The mayor wants apartment blocks. Spoiler: Clara wins.',
        },
        longDescription: {
            de: 'Clara ist Musikerin, das lokale Konzerthaus soll abgerissen werden, und der Bürgermeister ist so arrogant, dass man ihn schon beim Schreiben nicht leiden kann. Die Mission: andere Musiker überzeugen, ein letztes großes Konzert zu geben — natürlich nicht ohne vorher ihre persönlichen Krisen zu lösen, weil das bei RPGs so läuft. Der Artstyle ist von Honkai: Star Rail inspiriert, die Charaktere kamen aus VRoid Studio — wo wir leider die schmerzhafte Lektion lernten, dass VRoid-Modelle und Mixamo-Animationen sich ungefähr so vertragen wie der Bürgermeister und guter Geschmack. Die Spielfigur versank gelegentlich im Boden. Als Hauptentwicklerin habe ich trotzdem alles zusammengehalten.',
            en: 'Clara is a musician, the local concert hall is slated for demolition, and the mayor is so arrogant you dislike him just from reading about him. The mission: convince other musicians to perform one last grand concert — naturally not before solving each of their personal crises, because that\'s just how RPGs work. The art style is inspired by Honkai: Star Rail, the characters came from VRoid Studio — where we learned the painful lesson that VRoid models and Mixamo animations get along about as well as the mayor and good taste. The player character occasionally sank into the floor. As the main developer, I held it all together anyway.',
        },
        tags: ['Unity', 'Audio Design', 'Puzzle', 'C#', 'Music'],
        tech: ['Unity', 'C#', 'FMOD', 'Audio Programming'],
        images: [
            'images/last-symphony-1.png',
        ],
    },
    'blurred-thoughts': {
        title: 'Blurred Thoughts (GameJam)',
        category: 'Game Development',
        year: '2024',
        color: 'from-indigo-500 to-purple-600',
        links: { github: 'https://github.com/l1lm0ch1/Blurry-Thoughts-Game.git' },
        description: {
            de: 'Ein düsteres Escape Room Spiel — entwickelt in 48 Stunden, befeuert von Energy Drinks und einer Mitternachts-Rave-Party.',
            en: 'A dark escape room game — built in 48 hours, fueled by energy drinks and a midnight rave party.',
        },
        longDescription: {
            de: 'Hagenberg Game Jam 2024. Thema: "Blast from the Past." Team: fünf Personen. Verpflegung: Energy Drinks, Kaffee, McDonald\'s, und aus irgendeinem Grund eine dreistündige Rave-Party um Mitternacht. Haben wir das Spiel danach auch direkt gespeedrunnt? Ja. Haben wir die Zeiten aufgeschrieben? Nein. Classic. Die Story beginnt in einem alten Klassenzimmer: Der Protagonist wacht ohne Erinnerung auf, VHS-Kassetten enthüllen nach und nach seine Vergangenheit. Das letzte Tape rät schlicht: "Take it off." Er nimmt das VR-Headset ab — und findet sich in einer hellen, bunten Welt wieder. Auflösung: alles war Teil eines Therapieprogramms. Das Spiel endet im Büro eines Therapeuten. Wir haben Platz 4 von 15 Teams belegt. Für zwei Tage, null Schlaf und eine improvisierte Rave-Party: absolut zufrieden.',
            en: 'Hagenberg Game Jam 2024. Theme: "Blast from the Past." Team: five people. Fuel: energy drinks, coffee, McDonald\'s, and for some reason a three-hour rave party at midnight. Did we also immediately start speedrunning the game afterward? Yes. Did we write down our times? No. Classic. The story begins in an old classroom: the protagonist wakes up with no memory, VHS tapes gradually reveal his past. The final tape simply says: "Take it off." He removes the VR headset — and finds himself in a bright, colorful world. The reveal: it was all part of a therapy program. The game ends in a therapist\'s office. We placed 4th out of 15 teams. For two days, zero sleep, and an improvised rave party: absolutely satisfied.',
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
        year: '2025',
        color: 'from-red-600 to-red-900',
        links: {},
        description: {
            de: 'Monster jagen. Exorzieren. Nicht sterben. Ein Multiplayer-Horrorspiel für alle, die Phasmophobia nicht gruselig genug finden.',
            en: 'Hunt monsters. Exorcise them. Don\'t die. A multiplayer horror game for everyone who thinks Phasmophobia isn\'t scary enough.',
        },
        longDescription: {
            de: 'Alles begann damit, dass ich mit einem Teammitglied zu viel Phasmophobia gespielt habe. Irgendwann haben wir uns gefragt: Was, wenn man die Monster auch aktiv exorzieren könnte? Und was, wenn die Skillchecks aus Dead by Daylight auch dabei wären? Ergebnis: The Feast — ein Multiplayer-Horrorspiel in einem verwunschenen Haus, entwickelt in Unreal Engine 5 hauptsächlich mit Blueprints. Der Multiplayer lief über Steam Subnets, das sich in Unreal überraschend unkompliziert einbinden ließ. Netzwerkarchitektur und Synchronisierung waren meine Hauptverantwortung — und mein persönliches "du dachtest, das wäre zu kompliziert"-Moment des Semesters.',
            en: 'It all started because a teammate and I played too much Phasmophobia. At some point we asked ourselves: what if you could also actively exorcise the monsters? And what if Dead by Daylight\'s skill checks were part of it? Result: The Feast — a multiplayer horror game in a haunted house, built in Unreal Engine 5 primarily with Blueprints. Multiplayer ran via Steam Subnets, which integrated into Unreal surprisingly smoothly. Network architecture and synchronization were my main responsibility — and my personal "you thought this would be hard" moment of the semester.',
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
        year: '2025',
        color: 'from-green-400 to-emerald-600',
        links: { github: 'https://github.com/l1lm0ch1/Petal-Potions.git' },
        description: {
            de: 'Blumen züchten, Tränke brauen, in VR entspannen — inspiriert von Stardew Valley und Slime Rancher.',
            en: 'Grow flowers, brew potions, relax in VR — inspired by Stardew Valley and Slime Rancher.',
        },
        longDescription: {
            de: 'Petal Potions ist bis heute eines meiner liebsten Projekte — und mein erstes richtiges VR-Spiel. Die Vision war von Anfang an klar: cute Artstyle, gemütliches Flower Farming, Potions brauen. Stardew Valley trifft Slime Rancher, nur in VR und ohne dass man sich um Erntezeiten sorgen muss. Die Arbeitsteilung war eingespielt: Ich habe alle Systeme in C# entwickelt, meine Kollegin hat jedes einzelne Asset von Grund auf selbst erstellt. Fast wäre auch ein Player Character dabei gewesen — das Modell existiert sogar noch irgendwo. Aber am Ende fehlte einfach die Zeit, und ehrlich gesagt hat das Spiel auch so eine Menge Charme.',
            en: 'Petal Potions remains one of my favorite projects to this day — and my first real VR game. The vision was clear from the start: cute art style, cozy flower farming, brewing potions. Stardew Valley meets Slime Rancher, but in VR and without having to worry about harvest timers. The division of work was clean: I developed all systems in C#, my colleague created every single asset entirely from scratch. We almost had a full player character too — the model still exists somewhere. But in the end we ran out of time, and honestly the game has plenty of charm without it.',
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
        year: '2026',
        color: 'from-red-500 to-pink-600',
        links: {},
        badge: { de: 'Abgeschlossen', en: 'Completed' },
        description: {
            de: 'Bachelorarbeit: Physische Objekte in VR — weil "einfach einen Controller halten" manchmal nicht reicht.',
            en: 'Bachelor thesis: physical objects in VR — because "just hold a controller" sometimes isn\'t enough.',
        },
        longDescription: {
            de: 'Die zentrale Frage dieser Bachelorarbeit: Macht es wirklich einen Unterschied, ob man in VR echte physische Objekte anfassen kann — oder reicht ein Controller? Spoiler: Es macht einen Unterschied. Der entwickelte Prototyp kombiniert einen Arduino Mega 2560 mit Arcade-Buttons und Slidern als interaktive Reaktionswand sowie ArUco Marker-Tracking auf Würfeln für eine Sorting Task. Objekt-Erkennung läuft über Unity Collision Detection, evaluiert wurde das System in einem VR Escape Room Kontext durch eine qualitative Experten-Evaluation mit drei Fachexperten. Ich habe den gesamten Prototypen entwickelt. Eine Studienkollegin durfte ihn mitnutzen und hat dafür die Assets erstellt — eine Abmachung, die im Nachhinein noch eine zusätzliche VR-Only Version ohne physische Objekte für sie bedeutet hat. Wichtigste Nebenerkenntnis: Absprachen bitte schriftlich, vor dem Time Crunch, und am besten notariell beglaubigt.',
            en: 'The central question of this bachelor thesis: does it actually make a difference whether you can touch real physical objects in VR — or is a controller enough? Spoiler: it makes a difference. The developed prototype combines an Arduino Mega 2560 with arcade buttons and sliders as an interactive reaction wall, alongside ArUco marker-based tracking on cubes for a sorting task. Object recognition runs via Unity collision detection, and the system was evaluated in a VR escape room context through a qualitative expert evaluation with three domain experts. I developed the entire prototype. A fellow student was permitted to use it in exchange for creating the assets — an arrangement that, in hindsight, also meant building an additional VR-only version without physical objects for her. Key side lesson: please document agreements in writing, before the time crunch, and ideally have them notarized.',
        },
        tags: ['Bachelor Thesis', 'VR', 'Unity', 'C#', 'Arduino', 'ArUco', 'Research', 'Haptic Feedback'],
        tech: ['Unity 6', 'C#', 'Arduino', 'XR Interaction Toolkit', 'OpenCV', 'Meta Quest 2'],
        images: [
            'images/approaches-to-enhancing-immersion-1.png',
            'images/approaches-to-enhancing-immersion-2.png',
        ],
    },
    'archangel-vr': {
        title: 'Archangel VR',
        category: 'VR Game',
        year: '2025',
        color: 'from-purple-500 to-indigo-600',
        links: {},
        description: {
            de: 'Soldat. Feindgebiet. Kaputtes Radio. Verwundeter Kamerad. Und ein Ende, das alles auf den Kopf stellt.',
            en: 'Soldier. Enemy territory. Broken radio. Wounded comrade. And an ending that flips everything upside down.',
        },
        longDescription: {
            de: 'Archangel war mein bisher ambitioniertestes VR-Projekt. Du spielst einen Soldaten, der nach einem Fallschirmabsturz desorientiert im Feindesgebiet aufwacht — umgeben von verrauchten Schützengräben und der dringenden Frage, was zur Hölle gerade passiert ist. Auf dem Weg findest du einen verletzten jungen Soldaten, den du in Sicherheit bringen musst. Ein kaputtes Radio muss repariert werden, um Kontakt zur Einheit aufzunehmen. Und dann, am Ende — eine Wendung, die das gesamte Erlebnis neu rahmt und rückwirkend alles in einem anderen Licht erscheinen lässt. Als zweite Hauptentwicklerin war Archangel die Art von Projekt, bei der man merkt, wie weit man seit dem ersten kaputten VRChat-Rig schon gekommen ist.',
            en: 'Archangel was my most ambitious VR project to date. You play a soldier who wakes up disoriented in enemy territory after a parachute crash — surrounded by smoky trenches and the pressing question of what on earth is going on. Along the way, you find a wounded young soldier you need to bring to safety. A broken radio needs to be repaired to reach your unit. And then, at the end — a twist that reframes the entire experience and makes everything that came before look different in retrospect. As the main developer, Archangel was the kind of project where you realize just how far you\'ve come since that first broken VRChat rig.',
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
        year: '2025',
        color: 'from-teal-400 to-blue-500',
        links: { itch: 'https://l1lm0ch1.itch.io/letters-to-myself' },
        description: {
            de: 'Ein Serious Game über Mental Health — Briefe schreiben, dekorieren, abschicken, und dabei ein Leben aufdecken.',
            en: 'A serious game about mental health — write letters, decorate them, send them off, and uncover a life.',
        },
        longDescription: {
            de: 'Letters to Myself entstand im Kurs "Games with a Purpose" an der FH Hagenberg — und ist wohl das emotionalste Projekt, das ich je gemacht habe. Die Protagonistin erwacht in einem leeren Raum und findet Briefe, die scheinbar von ihr selbst stammen. Nach dem Dekorieren mit Stickern und Briefpapier werden die Briefe abgeschickt und manifestieren Objekte im Raum — jeder Brief ein Stück Backstory, jedes Objekt ein kleines Stück Erinnerung. Das Spiel verbindet 3D-Exploration mit einem 2D-Decoration-Interface, einem Tag-Nacht-Zyklus und emotionalen Easter Eggs, die man nur findet, wenn man genau hinschaut. Als Hauptentwicklerin habe ich alle Systeme in C# programmiert sowie Konzept und Game Design verantwortet. Es ist leise, es ist persönlich — und es ist eines der Projekte, auf die ich am meisten stolz bin.',
            en: 'Letters to Myself was created for the "Games with a Purpose" course at the University of Applied Sciences Upper Austria — and is probably the most emotional project I\'ve ever made. The female protagonist wakes up in an empty room and finds letters that appear to come from herself. After decorating them with stickers and stationery, the letters are sent off and manifest objects in the room — each letter a piece of backstory, each object a small fragment of memory. The game combines 3D exploration with a 2D decoration interface, a day-night cycle, and emotional Easter eggs you only find if you look closely. As the main developer, I programmed all systems in C# and was responsible for the concept and game design. It\'s quiet, it\'s personal — and it\'s one of the projects I\'m most proud of.',
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
    const { id } = useParams();
    const { language, t } = useTranslation();

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
                        <div
                            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 animate-fadeIn"
                            style={{ animationDelay: '0.3s' }}
                        >
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
                                ) : null}
                                {project.links?.itch ? (
                                    <a
                                        href={project.links.itch}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                                    >
                                        itch.io
                                    </a>
                                ) : null}
                                {!project.links?.github && !project.links?.itch && (
                                    <span className="text-zinc-500 italic">No links available</span>
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
            </div >
        </div >
    );
}