import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const path = location.pathname;

    console.log(path)

    // Navbar shrink function
    const navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar initially
    useEffect(() => {
        navbarShrink();
    }, []);

    // Shrink the navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            navbarShrink();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Collapse responsive navbar when toggler is visible
    useEffect(() => {
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = Array.from(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );

        const handleResponsiveNavClick = () => {
            if (
                window.getComputedStyle(navbarToggler).display !== 'none' &&
                navbarToggler.classList.contains('show')
            ) {
                navbarToggler.click();
            }
        };

        responsiveNavItems.forEach((responsiveNavItem) => {
            responsiveNavItem.addEventListener('click', handleResponsiveNavClick);
        });

        return () => {
            responsiveNavItems.forEach((responsiveNavItem) => {
                responsiveNavItem.removeEventListener(
                    'click',
                    handleResponsiveNavClick
                );
            });
        };
    }, []);

    return (
        <header className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/">Abeera Zafar</Link>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu {" "}
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        {path && path === '/' && (
                            <>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3" href="#portfolio">Portfolio</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3" href="#about">About</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3" href="#contact">Contact</a></li>
                            </>
                        )}
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3" to="/ebooks-designing">Ebooks</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3" to="/kdp-designs">KDP Books</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3" to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
