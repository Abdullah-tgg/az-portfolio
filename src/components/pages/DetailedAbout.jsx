import Hero from '../Hero.jsx';
import { Link } from 'react-router-dom';
import abdullahImg from '../../assets/images/team/abdullah.png';
import abeeraImg from '../../assets/images/team/abeera-zafar.png';

const DetailedAbout = () => {
    const heroContent = {
        title: 'About Nexmax',
        subtitle: 'A small studio shipping polished design and software.',
    };
    return (
        <>
            <Hero content={heroContent} />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <p className="lead">
                            Nexmax is a two-person studio that helps founders, publishers and small
                            teams turn rough ideas into things people actually use. We work across
                            two crafts under one roof: <strong>design</strong> (lead-magnet ebooks,
                            KDP book covers, brand collateral) and <strong>mobile development</strong>
                            {' '}(production iOS and Android apps).
                        </p>
                        <p className="lead">
                            One brand, two crafts, zero hand-offs — when a project needs both
                            screens and pages, you talk to the same people through the whole thing.
                        </p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 mb-5">
                        <div className="text-center mb-3">
                            <img
                                src={abeeraImg}
                                alt="Abeera Zafar"
                                className="rounded-circle"
                                style={{ width: '160px', height: '160px', objectFit: 'cover' }}
                            />
                        </div>
                        <h3 className="text-center mb-2">Abeera Zafar</h3>
                        <p className="text-center text-secondary"><em>Lead Designer</em></p>
                        <p>
                            Abeera is a content designer specialising in marketing collateral —
                            ebooks, workbooks, lead magnets, KDP book covers, fillable PDFs,
                            flyers and brochures. She has shipped 200+ lead magnets for 50+
                            businesses and treats every page as a conversion surface.
                        </p>
                        <ul className="list-unstyled">
                            <li>✅ Lead-magnet ebook design</li>
                            <li>✅ KDP & Kindle book covers</li>
                            <li>✅ Workbooks, checklists, interactive PDFs</li>
                            <li>✅ Flyers, brochures, social-media templates</li>
                        </ul>
                    </div>

                    <div className="col-md-6 mb-5">
                        <div className="text-center mb-3">
                            <img
                                src={abdullahImg}
                                alt="Abdullah"
                                className="rounded-circle"
                                style={{ width: '160px', height: '160px', objectFit: 'cover' }}
                            />
                        </div>
                        <h3 className="text-center mb-2">Abdullah</h3>
                        <p className="text-center text-secondary"><em>Mobile Developer</em></p>
                        <p>
                            Abdullah builds production mobile apps end to end — React Native on
                            iOS and Android, with the backend, payments and store-submission work
                            included. Recent shipped work includes Nsuna and Souqna, plus
                            in-progress builds for Pizzeria Limone, Betsie and GymProJa.
                        </p>
                        <ul className="list-unstyled">
                            <li>✅ React Native (iOS &amp; Android)</li>
                            <li>✅ TypeScript, Node.js, Firebase</li>
                            <li>✅ Stripe &amp; in-app payments</li>
                            <li>✅ App Store &amp; Play Store releases</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center my-5">
                    <p className="lead mb-3">Have a project in mind?</p>
                    <Link className="btn btn-xl btn-outline-dark" to="/#contact">
                        Let&apos;s Chat
                        <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DetailedAbout;
