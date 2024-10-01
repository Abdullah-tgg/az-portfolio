import React from 'react';
import Hero from '../Hero';
import KDPBooks from '../../assets/KDPbooks.json'; 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const KDPDesigns = () => {

    const heroContent = {
        title: 'KDP (Kindle & Print Books) Designing',
        subtitle: `I specialize in designing and redesigning various publications, including ebooks, print books, book covers, Kindle books, KDP books, Nook books, flyers, and brochures.`,
    };

    return (
        <>
            <Hero content={heroContent} />
            <section className='my-5'>
                <div className="container portfolio">
                    <div className="row">
                        {
                            KDPBooks && KDPBooks.length > 0 &&
                            KDPBooks.map((book, id) => (
                                <div className="col-md-4 col-sm-6 col-12 mb-3" key={book.id}>
                                    <button type="button" className="card portfolio-item mx-auto ebook-card p-0" data-bs-toggle="modal" data-bs-target={`#exampleModal-${id + 1}`}>
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                {book.title}
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                        <img
                                            src={book.images[0]}  // First image in the array as thumbnail
                                            alt={book.title}
                                            className="img-fluid rounded ebook-img w-100"
                                            style={{ objectFit: 'cover', height: '280px' }}
                                            loading="lazy"
                                        />
                                    </button>

                                    {/* Modal for displaying the book details and carousel */}
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
                                                                {book.images.map((image, index) => (
                                                                    <div key={index}>
                                                                        <img src={image} alt={`${book.title} image ${index + 1}`} className="img-fluid rounded ebook-img w-100" />
                                                                    </div>
                                                                ))}
                                                            </Carousel>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h5 className='mb-0 text-primary'>{book.title}</h5>
                                                            <p>
                                                                <small className='text-secondary'>{book.language}</small>
                                                            </p>
                                                            <p><strong className="text-secondary">Description: </strong>{book.description}</p>
                                                            {/* <p className="mb-0"><strong className="text-secondary">Formats:</strong> {book.formats ? book.formats.join(', ') : 'N/A'}</p> */}
                                                            <p className="mb-0"><strong className="text-secondary">Deliverables: </strong> {book.deliverables}</p>
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

export default KDPDesigns;
