import Button from './Button';
import { useTranslation } from '../i18n/translations.ts';

const HeroSection = () => {
    const { t } = useTranslation(); // <-- hier korrigiert

    return (
        <section id="home" style={{ padding: '4rem', backgroundColor: '#121212', color: 'white' }}>
            <h1>Lilli Ölsinger</h1>
            <p>{t('hero.description')}</p>
            <Button
                label={t('hero.viewPortfolio')}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            />
        </section>
    );
};

export default HeroSection;