import { Link } from 'react-router-dom'

import EbooksImg from '../assets/images/services/1.png'
import KdpImg from '../assets/images/services/2.png'
import MobileImg from '../assets/images/services/3.png'

const services = [
    {
        title: 'Ebooks & Lead Magnets',
        to: '/ebooks-designing',
        image: EbooksImg,
    },
    {
        title: 'KDP (Kindle & Print Books)',
        to: '/kdp-designs',
        image: KdpImg,
    },
    {
        title: 'Mobile Apps',
        to: '/mobile-apps',
        image: MobileImg,
    },
]

const Portfolio = () => {
    return (
        <>
            <section className="page-section portfolio reveal" id="portfolio">
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">What We Do</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row justify-content-center reveal reveal-stagger">
                        {services.map((service) => (
                            <div className="col-md-6 col-lg-4 mb-5" key={service.to}>
                                <Link to={service.to}>
                                    <div className="portfolio-item mx-auto">
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                {service.title}
                                            </div>
                                        </div>
                                        <img className="img-fluid" src={service.image} loading="lazy" alt={service.title} />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
