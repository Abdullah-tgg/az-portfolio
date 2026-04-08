import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import apps from '../../assets/data/mobile-apps.json';
import { resolveImage } from '../../assets/imageMap.js';

const STORE_LABELS = {
    appStore: { label: 'App Store', icon: 'fab fa-app-store-ios' },
    playStore: { label: 'Google Play', icon: 'fab fa-google-play' },
    website: { label: 'Website', icon: 'fas fa-globe' },
    github: { label: 'GitHub', icon: 'fab fa-github' },
};

const MobileAppDetails = () => {
    const { id } = useParams();
    const app = apps.find((a) => a.id === id);

    if (!app) {
        return (
            <div className="container py-5 my-5 text-center">
                <h1>App not found</h1>
                <Link to="/mobile-apps" className="btn btn-outline-primary mt-3">
                    <i className="fas fa-arrow-left me-2"></i>
                    Back to all apps
                </Link>
            </div>
        );
    }

    const links = app.links || {};
    const linkEntries = Object.entries(links).filter(([, url]) => Boolean(url));

    return (
        <div className="container py-5 my-5">
            <Link to="/mobile-apps" className="text-secondary text-decoration-none">
                <i className="fas fa-arrow-left me-2"></i>
                All mobile apps
            </Link>

            <div className="row mt-4">
                <div className="col-md-6 mb-4">
                    {app.images && app.images.length > 0 ? (
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay transitionTime={500}>
                            {app.images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={resolveImage(image)}
                                        alt={`${app.title} screenshot ${index + 1}`}
                                        className="img-fluid rounded"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <img
                            src={resolveImage(app.thumbnail)}
                            alt={app.title}
                            className="img-fluid rounded"
                        />
                    )}
                </div>

                <div className="col-md-6">
                    <h1 className="mb-1 text-primary">{app.title}</h1>
                    {app.tagline && (
                        <p className="text-secondary lead mb-3">{app.tagline}</p>
                    )}

                    {app.description && (
                        <p className="mb-4">{app.description}</p>
                    )}

                    {app.platforms && app.platforms.length > 0 && (
                        <p className="mb-2">
                            <strong className="text-secondary">Platforms: </strong>
                            {app.platforms.join(', ')}
                        </p>
                    )}

                    {app.stack && app.stack.length > 0 && (
                        <p className="mb-2">
                            <strong className="text-secondary">Stack: </strong>
                            {app.stack.join(', ')}
                        </p>
                    )}

                    {app.role && (
                        <p className="mb-2">
                            <strong className="text-secondary">Role: </strong>
                            {app.role}
                        </p>
                    )}

                    {app.year && (
                        <p className="mb-4">
                            <strong className="text-secondary">Year: </strong>
                            {app.year}
                        </p>
                    )}

                    {linkEntries.length > 0 && (
                        <div className="d-flex flex-wrap gap-2 mt-4">
                            {linkEntries.map(([key, url]) => {
                                const meta = STORE_LABELS[key] || { label: key, icon: 'fas fa-link' };
                                return (
                                    <a
                                        key={key}
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-outline-primary"
                                    >
                                        <i className={`${meta.icon} me-2`}></i>
                                        {meta.label}
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileAppDetails;
