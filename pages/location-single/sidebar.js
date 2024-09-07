import React from 'react'
import Services from '../../api/service';
import Link from  'next/link'
import Image from 'next/image';
import Benefits from './benefits';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>All Services</h2>
                    <ul>
                        {Services.slice(0,6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href="/service-single/[slug]" as={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
              
            
                <div className="wpo-contact-widget widget">
                    <h2>How We Can <br/> Help You!</h2>
                    <p>we're available 24 x 7 </p>
                    <Link href="/contact">Contact Us</Link>
                </div>

                <Benefits/>
            </div>
        </div>

    )
}

export default ServiceSidebar;