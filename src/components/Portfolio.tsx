interface Project {
    name: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    { name: 'VR Chat Avatar', description: 'My first VR Chat avatars', image: '/images/vr-avatar.png' },
    { name: 'VR Chat World', description: 'Custom VR Chat world', image: '/images/vr-world.png' },
    { name: 'Divine Meltdown Chpt.1', description: 'First full game prototype at FH', image: '/images/divine-meltdown.png' },
    // ... alle weiteren Projekte
];

const Portfolio = () => (
    <section id="portfolio" style={{ padding: '4rem', backgroundColor: '#1a1a1a', color: 'white' }}>
        <h2>Portfolio</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {projects.map(p => (
                <div key={p.name} style={{ width: '300px', backgroundColor: '#222', padding: '1rem', borderRadius: '10px' }}>
                    <img src={p.image} alt={p.name} style={{ width: '100%', borderRadius: '8px' }} />
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Portfolio;
