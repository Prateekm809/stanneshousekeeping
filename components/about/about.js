import React from 'react'
import abimg from '/public/images/about.png'
import sign from '/public/images/signeture.png'
import Image from 'next/image'


const About = (props) => {
    return(
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-section-title-s2">
                                    <h2>Over 25+ Years Experience
                                        In Cleaning Service</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>At St. Anne’s Housekeeping, we’re all about professionalism and quality. We did not become one of the best-regarded residential cleaning and housekeeping services in London overnight. Over the years we’ve proven ourselves to exceed client expectations. Whatever the job, we’ll go above and beyond.</p>
                                    <p>We were founded in 2008, and have dedicated ourselves to constantly improving our service ever since.</p>
                                    <p>We give a true 5-star cleaning service to clients throughout central London understand that each client is different, requiring a custom-tailored service. We pay close attention to every detail and provide exemplary customer service on each call. In the end, our job is not just to make sure your home or office sparkles, it is to save you time, trouble and effort, and let you focus instead on what is truly important in your life.</p>
                                    <p>Whether you need weekly home or office cleaning services, help to ready a rental property for a new tenant or just an occasional spring clean of your own home, St. Anne’s Housekeeping wants to be your cleaning specialist in London.</p>
                                    <p>Our professional housekeeping and cleaning services, both commercial and domestic, are carried out using only eco-friendly. We’re also fully insured and have the best, experienced staff including cleaning maids and housekeepers.</p>
                                    <p>We are currently working throughout the Hammersmith, Westminster, Fulham, Chelsea, Kensington, Southwark, Islington, Hampstead, High Gate and St Johns Wood areas. We hope to expand further in the future.</p>
                                    {/* <div className="signeture">
                                        <h4>Brubaker Nilka</h4>
                                        <p>Vertex Chambers, CEO</p>
                                        <span><Image src={sign} alt=""/></span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;