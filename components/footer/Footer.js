import React from 'react'
import Link from "next/link";
import Logo from '/public/images/logo.png'
import Services from '../../api/service';
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="blog"/>
                                </div>
                                <p>At St Anne’s Housekeeping, our job is not just to make sure your home or office sparkles, </p>
                                <p>it is to save you time, trouble and effort, and let you focus instead on what is truly important in your life.</p>

                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Link</h3>
                                </div>
                                <ul>
                                    <li><Link href="/about">About Us </Link></li>
                                    <li><Link href="/service-s2">Service</Link></li>
                                    <li><Link href="/appointment">Appointment</Link></li>
                                    <li><Link href="/contact">Contact Us </Link></li>
                                    <li><Link href="/locations">locations</Link></li>
                                    <li><Link href="/blog">blog</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget join-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>subscribe to our newsletter</p>
                                <form onSubmit={SubmitHandler}>
                                    <input type="email" placeholder="support@gmail.com" required/>
                                    <button type="submit">Send Now <i className="ti-arrow-right"></i></button>
                                </form>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0,6).map((service, srv) => (
                                        <li key={srv}><Link onClick={ClickHandler} href="/service-single/[slug]" as={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> St. anne's housekeeping Copyright &copy; 2023 | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;