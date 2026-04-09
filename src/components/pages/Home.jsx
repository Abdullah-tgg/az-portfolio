import Hero from '../Hero.jsx';
import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';
import Testimonials from '../Testimonials';
import RecentsCarousel from '../RecentsCarousel';

const Home = () => {
    const heroContent = {
        title: 'Nexmax',
        subtitle: `A small studio shipping polished design and software — lead-magnet ebooks, KDP book covers and production mobile apps.`,
    }
    return (
        <>
            <Hero content={heroContent} />
            <RecentsCarousel />
            <Portfolio />
            <About />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home
