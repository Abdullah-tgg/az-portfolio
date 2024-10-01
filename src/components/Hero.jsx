import React from 'react'

import abeeraZafar from '../assets/img/abeera-zafar-02.png'

const Hero = ({ content }) => {
    const { title, subtitle } = content;

    return (
        <>
            <header className="masthead masthead-bg text-white text-center">
                <div className="container d-flex align-items-center flex-column">

                    <img className="masthead-avatar mb-5" src={abeeraZafar} alt="abeera zafar's image" />

                    <h1 className="masthead-heading text-uppercase mb-0">{title}</h1>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <p className="masthead-subheading font-weight-light mb-0">{subtitle}</p>
                </div>
            </header>
        </>
    )
}

export default Hero