import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '/public/images/testimonial.jpg'
import Image from "next/image";


const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const testimonial = [
    {
        Des: "St. Anne’s Group has been cleaning our facility since June 2004. During this time, St. Anne’s Group has never missed a day of service. We are a seven day a week operation that trains pilots from all over the world. In addition to our classrooms and offices, St. Anne’s Group also cleans all restrooms, hallways, lobbies and break areas. St. Anne’s Group is always flexible when it comes to cleaning time changes or extra duties. ",
        Title: 'Karen Curling',
        
    },
    {
        Des: "I would, and often do, recommend St. Anne’s Group as a provider of security services. They are adaptable, commercially aware and completely comprehend the commercial realities of the late night sector. They are reputable, reliable and respected by local authorities and institutions and moreover, they are a pleasure to work with.",
        Title: 'Ken Williamson',
       
    },
    {
        Des: "My wife and I have been relying on St. Anne’s Group for the past decade and have always been pleased with the personnel provided to us for our housekeeping needs. The staff is reliable, thorough, ready to provide us with any special requirements that we may have regarding shutters, windows, fragile glass object, etc. St. Anne’s Group is also flexible when it comes to scheduling in order to meet the household’s needs. If we need to change, or there is a need to substitute someone on a temporary basis.",
        Title: 'Rita Marshall',
       
    }
]

const Testimonial = () => {
    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>What Clients Say?</h2>
                            <p>Read the reviews of our clients.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-testimonials-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="wpo-testimonials-img">
                                <Image src={ts1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="wpo-testimonials-text">
                                <div className="quote">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <div className="wpo-testimonials-slide owl-carousel">
                                    <Slider {...settings}>
                                        {testimonial.map((tesmnl, tsm) => (
                                            <div className="wpo-testimonials-slide-item" key={tsm}>
                                                <p>{tesmnl.Des}</p>
                                                <h5>{tesmnl.Title}</h5>
                                                <span>{tesmnl.Sub}</span>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;