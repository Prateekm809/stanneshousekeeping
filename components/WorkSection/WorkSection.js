import React from 'react'

import wImg1 from '/public/images/work/7.jpg'
import wImg2 from '/public/images/work/5.jpg'
import wImg3 from '/public/images/work/6.jpg'
import Image from 'next/image'

const WorkSection = (props) => {
    return (
        <section className="wpo-work-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>How It Works</h2>
                            <p>Book Professional Cleaning in 3 Easy Steps: Schedule, Share Requirements, and Enjoy a Spotless Space!</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-work-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-img">
                                    <Image src={wImg1} alt=""/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2>Get a Quote</h2>
                                </div>
                                <div className="visible-text">
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-text">
                                    <h2>Schedule Your Service </h2>
                                </div>
                                <div className="visible-text">
                                    <span>2</span>
                                </div>
                                <div className="wpo-work-img">
                                    <Image src={wImg2} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-img">
                                    <Image src={wImg3} alt=""/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2>Relax and Enjoy</h2>
                                </div>
                                <div className="visible-text">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkSection;