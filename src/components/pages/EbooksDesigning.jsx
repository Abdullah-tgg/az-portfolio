import Hero from '../Hero.jsx';
import Ebooks from '../../assets/data/ebooks.json';
import { resolveImage } from '../../assets/imageMap.js';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import abeeraImg from '../../assets/images/team/abeera-zafar.png';

const EbooksDesigning = () => {

    const heroContent = {
        title: 'Ebooks & Lead Magnets',
        subtitle: `Designed by Abeera Zafar — ebooks, print books, book covers, Kindle books, KDP books, flyers and brochures crafted to convert.`,
    };

    return (
        <>
            <Hero content={heroContent} image={abeeraImg} />
            <section className="container my-5">
                <div className="d-flex align-items-center justify-content-center gap-3 designer-credit">
                    <img
                        src={abeeraImg}
                        alt="Abeera Zafar"
                        className="rounded-circle"
                        style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                    />
                    <div>
                        <p className="mb-0"><strong>Designed by Abeera Zafar</strong></p>
                        <p className="mb-0 text-secondary small">Lead Designer at Nexmax</p>
                    </div>
                </div>
            </section>
            <section className='my-5'>
                <div className="container portfolio">
                    <div className="row reveal reveal-stagger">
                        {Ebooks && Ebooks.length > 0 && Ebooks.map((ebook, id) => (
                            <div className="col-md-4 col-sm-6 col-12 mb-3" key={ebook.id}>
                                <button type="button" className="card portfolio-item mx-auto ebook-card p-0" data-bs-toggle="modal" data-bs-target={`#exampleModal-${id + 1}`}>
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white">
                                            {ebook.title}
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    <img
                                        src={resolveImage(ebook.images[0])}
                                        alt={ebook.title}
                                        className="img-fluid rounded ebook-img w-100"
                                        style={{ objectFit: 'cover', height: '280px' }}
                                        loading="lazy"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*
              Modals are rendered OUTSIDE the .reveal-stagger row on purpose.
              A transformed parent (or one with `will-change: transform`)
              creates a containing block for `position: fixed` descendants,
              which traps Bootstrap's modal under its own backdrop and breaks
              the close button.
            */}
            {Ebooks && Ebooks.length > 0 && Ebooks.map((ebook, id) => (
                <div className="modal fade" id={`exampleModal-${id + 1}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${id + 1}`} aria-hidden="true" key={`modal-${ebook.id}`}>
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <h5 className="modal-title text-primary mb-0" id={`exampleModalLabel-${id + 1}`}>{ebook.title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Carousel showThumbs={false} showStatus={false} infiniteLoop>
                                            {ebook.images.map((image, index) => (
                                                <div key={index}>
                                                    <img src={resolveImage(image)} alt={`${ebook.title} image ${index + 1}`} className="img-fluid rounded ebook-img w-100" />
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                    <div className="col-md-6">
                                        <p>
                                            <small className='text-secondary'>{ebook.language}</small>
                                        </p>
                                        <p className="mb-0"><strong className="text-secondary">Description: </strong>{ebook.description}</p>
                                        <p className="mb-0"><strong className="text-secondary">Formats: </strong> {ebook.formats.join(', ')}</p>
                                        <p className="mb-0"><strong className="text-secondary">Deliverables: </strong> {ebook.deliverables}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default EbooksDesigning;
