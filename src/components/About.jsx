import { Link } from 'react-router-dom'
import abdullahImg from '../assets/images/team/abdullah.png'
import abeeraImg from '../assets/images/team/abeera-zafar.png'

const About = () => {
    return (<>
        <section className="page-section bg-primary text-white mb-0 reveal" id="about">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-white">About Nexmax</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <p className="lead">
                            Nexmax is a small, hands-on studio that ships polished design and software.
                            We help founders, publishers and small teams turn rough ideas into
                            things people actually use — from lead-magnet ebooks and KDP book covers
                            to production mobile apps on iOS and Android.
                        </p>
                        <p className="lead">
                            One brand, two crafts, zero hand-offs.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center mt-5 reveal reveal-stagger">
                    <div className="col-md-5 text-center mb-4">
                        <img
                            src={abeeraImg}
                            alt="Abeera Zafar"
                            className="rounded-circle mb-3"
                            style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                        />
                        <h4 className="mb-1">Abeera Zafar</h4>
                        <p className="mb-0"><em>Lead Designer</em></p>
                        <p className="small">Ebooks, lead magnets, KDP covers, brand collateral.</p>
                    </div>
                    <div className="col-md-5 text-center mb-4">
                        <img
                            src={abdullahImg}
                            alt="Abdullah"
                            className="rounded-circle mb-3"
                            style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                        />
                        <h4 className="mb-1">Abdullah</h4>
                        <p className="mb-0"><em>Mobile Developer</em></p>
                        <p className="small">React Native apps for iOS &amp; Android, end to end.</p>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <Link className="btn btn-xl btn-outline-light" to="/DetailedAbout">
                        Read More
                        <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>
        </section>
    </>)
}

export default About
