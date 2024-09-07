import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar.js'
import PageTitle from '../../components/pagetitle/PageTitle.js'
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2.js';
import PartnerSection from '../../components/PartnerSection/PartnerSection.js';
import Footer from '../../components/footer/Footer.js'
import Scrollbar from '../../components/scrollbar/scrollbar.js'

const ServicePageS2 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Locations'} pagesub={'Locations'}/> 
            <ServiceSectionS2/>
            <PartnerSection tNone={'partners-section-s2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePageS2;

