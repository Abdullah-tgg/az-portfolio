import React from 'react';
import Hero from '../Hero';
import { Link } from 'react-router-dom';

const DetailedAbout = () => {
    const heroContent = {
        title: 'About',
        subtitle: 'Abeera Zafar, a 𝐋𝐞𝐚𝐝 𝐌𝐚𝐠𝐧𝐞𝐭 𝐃𝐞𝐬𝐢𝐠𝐧 𝐒𝐩𝐞𝐜𝐢𝐚𝐥𝐢𝐬𝐭.',
    };
    return (
        <>
            <Hero content={heroContent} />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <p className="lead text-left">
                            I'm Abeera Zafar, a <strong>𝐋𝐞𝐚𝐝 𝐌𝐚𝐠𝐧𝐞𝐭 𝐃𝐞𝐬𝐢𝐠𝐧 𝐒𝐩𝐞𝐜𝐢𝐚𝐥𝐢𝐬𝐭</strong>. I help businesses like yours create irresistible lead magnets that capture high-quality leads, speak directly to your ideal customer's pain points, and boost your sales pipeline.
                        </p>
                        <h3 className="text-left mt-5 mb-4">𝐇𝐞𝐫𝐞'𝐬 𝐰𝐡𝐚𝐭 𝐈 𝐜𝐚𝐧 𝐝𝐨 𝐟𝐨𝐫 𝐲𝐨𝐮:</h3>
                        <ul className="list-unstyled text-left mx-auto">
                            <li className='lead'>✅  Uncover your ideal customer's deepest desires and frustrations.</li>
                            <li className='lead'>✅  Craft a targeted lead magnet that offers a solution they can't resist.</li>
                            <li className='lead'>✅  Design a high-converting lead magnet that effortlessly captures leads.</li>
                        </ul>
                        <p className="lead text-left my-5">
                            Ready to finally generate the leads you deserve? Connect with me today and let's discuss your lead generation goals!
                        </p>
                        <p className="lead text-left">
                            Want to learn more about me? Then keep reading...
                        </p>
                    </div>

                    <div className="col-12">
                        <h3 className="text-left mt-5 mb-4">About My Work</h3>
                        <p className="lead text-left">
                            I am a content designer who designs "Marketing content". I specifically design the ebooks (used for marketing or awareness of your business and in workshops), workbooks, checklists (for pre-check or post-check of the services you're offering), fillable and interactive PDFs (Forms, Worksheets, etc.), book covers, and printables (Flyers, brochures).
                        </p>
                        <h3 className="text-left mt-5 mb-4">My Services:</h3>
                        <ul className="list-unstyled text-left">
                            <li className='lead'>✅ Lead Magnet Designing (Ebooks, Workbooks, Pitch Decks, Banners, Brochures, Flyers, Magazines, Infographics, Visual Templates, Interactive PDFs, Slide Decks, Printables, and more)</li>
                            <li className='lead'>✅ Social Media Content Creation and Design (For Facebook, LinkedIn, Instagram, Pinterest)</li>
                            <li className='lead'>✅ Content Writing (Rewriting, Proofreading, Editing, Reviewing, Summarizing)</li>
                        </ul>

                        <p className="lead text-left my-5">
                            I have had the privilege of designing almost 200+ Lead Magnets. I've worked with 50+ businesses and generated significant revenue just by selling my passion for designing these Lead Magnets.
                        </p>
                        <p className="text-center">
                            Need Help?
                            <div className="text-center mt-4">
                                <Link className="btn btn-xl btn-outline-dark" to="https://wa.link/jczjvd">
                                    Let's Chat
                                    <i className="fas fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailedAbout;
