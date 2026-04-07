import { Link } from 'react-router-dom';
import Hero from '../Hero.jsx';
import MobileApps from '../../assets/data/mobile-apps.json';
import { resolveImage } from '../../assets/imageMap.js';
import abdullahImg from '../../assets/images/team/abdullah.png';

const MobileAppsPage = () => {
    const heroContent = {
        title: 'Mobile Apps',
        subtitle: 'Production iOS & Android apps built end-to-end by Nexmax — React Native, TypeScript, payments, store releases.',
    };

    return (
        <>
            <Hero content={heroContent} image={abdullahImg} />

            <section className="container my-5">
                <div className="d-flex align-items-center justify-content-center gap-3 designer-credit">
                    <img
                        src={abdullahImg}
                        alt="Abdullah"
                        className="rounded-circle"
                        style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                    />
                    <div>
                        <p className="mb-0"><strong>Built by Abdullah</strong></p>
                        <p className="mb-0 text-secondary small">Mobile Developer at Nexmax</p>
                    </div>
                </div>
            </section>

            <section className="my-5">
                <div className="container portfolio">
                    <div className="row reveal reveal-stagger">
                        {MobileApps && MobileApps.length > 0 && MobileApps.map((app) => (
                            <div className="col-md-4 col-sm-6 col-12 mb-4" key={app.id}>
                                <Link to={`/mobile-apps/${app.id}`} className="text-decoration-none">
                                    <div className="card portfolio-item mx-auto ebook-card p-0">
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                {app.title}
                                                <i className="fas fa-arrow-right ms-2"></i>
                                            </div>
                                        </div>
                                        <img
                                            src={resolveImage(app.thumbnail || app.images?.[0])}
                                            alt={app.title}
                                            className="img-fluid rounded ebook-img w-100"
                                            style={{ objectFit: 'cover', height: '280px', background: '#f5f5f7' }}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="text-center mt-3">
                                        <h5 className="mb-0 text-primary">{app.title}</h5>
                                        {app.tagline && (
                                            <p className="text-secondary small mb-0">{app.tagline}</p>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MobileAppsPage;
