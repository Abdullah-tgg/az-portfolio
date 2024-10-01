import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row">
                        <div className="col-12 mx-auto text-center">
                            <p className="lead">
                            𝐒𝐭𝐫𝐮𝐠𝐠𝐥𝐢𝐧𝐠 𝐭𝐨 𝐭𝐮𝐫𝐧 𝐰𝐞𝐛𝐬𝐢𝐭𝐞 𝐯𝐢𝐬𝐢𝐭𝐨𝐫𝐬 𝐢𝐧𝐭𝐨 𝐩𝐚𝐲𝐢𝐧𝐠 𝐜𝐮𝐬𝐭𝐨𝐦𝐞𝐫𝐬? 
                            </p>
                            <p className="lead">
                           You're pouring time and resources into lead generation, but your offers aren't converting.
                             </p>
                            <p className="lead">
                            That's where I come in.
                            </p>
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
        </>
    )
}

export default About