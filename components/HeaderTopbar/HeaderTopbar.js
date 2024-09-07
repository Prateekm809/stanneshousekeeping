import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-5 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi ti-location-pin"></i>32 Bloomsbury Street, London WC1B 3QJ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-7 col-sm-12 col-12">
    <div className="contact-info">
      <ul>
      <li><Link href="/appointment">  <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp; Get a quote</Link></li>
        <li>
          <a href="https://www.facebook.com/stanneshousekeeping" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/stanneshousekeeping/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram}  />
          </a>
        </li>
      </ul>
    </div>
  </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;