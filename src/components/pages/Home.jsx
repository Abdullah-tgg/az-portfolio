
import Hero from '../Hero';
import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';
import Testimonials from '../Testimonials';

const Home = () => {
    const heroContent = {
        title: 'Abeera Zafar',
        subtitle: `Transforming Ideas into Engaging Designs, Compelling Social Media Content,
        and Polished Writing Across All Niches.`,
    }
    return (
        <>
            <Hero content={heroContent} />
            <Portfolio />
            <About />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home