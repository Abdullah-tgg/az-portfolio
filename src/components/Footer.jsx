import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Islamabad, Pakistan
                            </p>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://wa.link/jczjvd" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-whatsapp"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-github"></i></a>
                        </div>

                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Nexmax</h4>
                            <p className="lead mb-0">
                                A small studio shipping polished design and software — ebooks, book covers and mobile apps.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container">
                    <small>
                        &copy; {new Date().getFullYear()}{' '}
                        <Link to="/">Nexmax</Link>
                        {' '}| Design &amp; Mobile Development
                    </small>
                </div>
            </div>
        </>
    )
}

export default Footer
