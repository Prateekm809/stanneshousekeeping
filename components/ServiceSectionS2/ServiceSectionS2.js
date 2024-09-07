import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Residential from './Residential';
import Commercial from './Commercial';
import city from '/public/images/locations/city.jpg'
import Image from 'next/image';

const ServiceSectionS2 = () => {

 

    return (
        <section className="wpo-service-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5">
                        <div className="wpo-section-title-s2">
                            <h2>Our Locations</h2>
                            <p>We are available in different locations</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="wpo-service-tabs">
                      

                   
                           <Image src={city}/>
                   
               
          

                        </div>
                    </div>
                </div>
               
                  <div className='section-padding'>
                        <Commercial/>
                        </div>
            </div>
        </section>

    )
}

export default ServiceSectionS2;