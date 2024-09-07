import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Appointment from '../../components/Appointment/Appointment.js';


const AppointmentPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'GET A QUOTE'} pagesub={'GET_A_QUOTE'}/> 
            <Appointment/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AppointmentPage;
