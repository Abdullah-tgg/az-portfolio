import React from 'react';
import Hero from '../Hero';
import Ebooks from '../../assets/Ebooks.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const EbooksDesigning = () => {

    const heroContent = {
        title: 'E-Books Designing',
        subtitle: `I specialize in designing and redesigning various publications, including ebooks, print books, book covers, Kindle books, KDP books, Nook books, flyers and brochures.`,
    };

    return (
        <>
            <Hero content={heroContent} />
            <section className='my-5'>
                <div className="container portfolio">
                    <div className="row">
                        {
                            Ebooks && Ebooks.length > 0 &&
                            Ebooks.map((ebook, id) => (
                                <div className="col-md-4 col-sm-6 col-12 mb-3" key={ebook.id}>
                                    <button type="button" className="card portfolio-item mx-auto ebook-card p-0" data-bs-toggle="modal" data-bs-target={`#exampleModal-${id + 1}`}>
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                {ebook.title}
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                        <img
                                            src={ebook.images[0]}  // First image in the array as thumbnail
                                            alt={ebook.title}
                                            className="img-fluid rounded ebook-img w-100"
                                            style={{ objectFit: 'cover', height: '280px' }}
                                            loading="lazy"
                                        />
                                    </button>

                                    {/* Modal for displaying the ebook details and carousel */}
                                    <div className="modal fade" id={`exampleModal-${id + 1}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${id + 1}`} aria-hidden="true">
                                        <div className="modal-dialog modal-xl">
                                            <div className="modal-content">
                                                <div className="modal-header border-0">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            {/* Carousel for displaying all images */}
                                                            <Carousel>
                                                                {ebook.images.map((image, index) => (
                                                                    <div key={index}>
                                                                        <img src={image} alt={`${ebook.title} image ${index + 1}`} className="img-fluid rounded ebook-img w-100" />
                                                                    </div>
                                                                ))}
                                                            </Carousel>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h5 className='mb-0 text-primary'>{ebook.title}</h5>
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
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default EbooksDesigning;
