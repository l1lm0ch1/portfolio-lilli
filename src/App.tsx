import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';
import { TranslationProvider } from './i18n/translations';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetails.tsx';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import './styles/App.css';

export default function App() {
    return (
        <TranslationProvider>
            <div className="min-h-screen bg-zinc-950 text-white relative overflow-x-hidden">
                <AnimatedBackground />
                <Navbar />

                <ScrollToTop />

                <main className="relative z-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:id" element={<ProjectDetail />} />
                        <Route path="/hobbies" element={<Hobbies />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </TranslationProvider>
    );
}
