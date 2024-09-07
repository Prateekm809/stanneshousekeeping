import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import PageTitle from '../../components/pagetitle/PageTitle.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js';
import { useRouter } from 'next/router';
import locations from '../../api/locations.js';
import Link from 'next/link';
import Benefits from './benefits.js';
import ServiceSidebar from './sidebar.js';
import Footer from '../../components/footer/Footer.js';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ServiceSinglePage = (props) => {
    const router = useRouter();

    // Ensure locationDetails is defined and handle the case where it might not exist
    const locationDetails = locations.find(item => item.slug === router.query.slug);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

  

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={`${locationDetails?.sTitle} `} pagesub={'locations'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image
                                        src={locationDetails?.img}
                                        alt={locationDetails?.sTitle}
                                        width={800} // set appropriate width
                                        height={600} // set appropriate height
                                    />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>{`${locationDetails?.sTitle} Housekeeping & Cleaning Services`}</h2>
                                        <p>{locationDetails?.description}</p>
                                        <p>Once you acquire that dream apartment in West Brompton do not forget to contact us to help you with your housekeeping routines so as to ensure that your household needs are professionally met. As professional housekeepers, we understand how frustrating and complicated sanitation tasks can be. This is why you need to give yourself a break and have us handle the logistics and execution of your home cleaning in West Brompton. Have you got a flat in West Brompton or you live in a bungalow? Be rest assured that, from the moment you hire St Anne’s Housekeeping services, the condition of your household will take a brand new turn. Are you interested in hiring a reliable housekeeper in West Brompton but you think it is a mission impossible? Please contact us today and let us change your perception about that.</p>
                                        <div className='container'>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-12 px-6 py-8 bg-white  rounded-lg'>
    <h2 className='text-3xl font-bold text-gray-800 mb-6'>What We Offer</h2>
    <p>
        St Anne’s housekeeping service doesn’t stop when your home is clean. We provide a number of complementary services:
    </p>
    <ul className='list-disc list-inside space-y-4 text-gray-700'>
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i>&nbsp;
          <span className='font-semibold text-blue-600'> <strong>Daily & Weekly Cleaning</strong></span>
          <br />
          Beautiful people deserve elegant homes! Our daily and weekly exquisite cleaning services ensure that you always come back to a sparkling home every day you return from your daily activities.
        </li> <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i>&nbsp;
          <span className='font-semibold text-blue-600'><strong>Spring Clean & Festive Clean</strong></span>
          <br />
          The next time spring sprung up please do not hesitate in contacting us, because only we can help you bust the dust. Festive seasons do come with their felicitations but afterwards intense cleaning would be required to restore your home’s glow. We’ve got some admirable services that cover this too.
        </li> <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-blue-600'> <strong>Deep Cleaning</strong></span>
          <br />
          Beat it! Let’s help you give those rugs, cushions, and upholstery some deep shake.
        </li> <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-blue-600'><strong>Laundry & Ironing</strong></span>
          <br />
          Sort, wash, dry, iron, fold, and repeat! We can help free up some of your time by doing your laundry for you.
        </li> <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-blue-600'><strong>Window & Carpet Cleaning</strong></span>
          <br />
          Restore your window’s glowing shades and your carpet’s blistering appearance with any of our window/carpet cleaning services.
        </li> <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-blue-600'><strong>End of Tenancy Cleaning</strong></span>
          <br />
          Make an apartment appealing to the next tenant! We are able to bring a new arc to apartments with our cleaning expertise. Expect your new tenants to ask you whether no one has ever lived in that apartment. Such is the level of cleaning we offer.
        </li> <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='text-gray-700'>Let us help you free up your time with any of our personalized services to suit your needs.</span>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
        </li> <br />
        <i className='fa-solid fa-check text-blue-600'></i> &nbsp;  Dry cleaning pick-up/collection <br /> 
        <i className='fa-solid fa-check text-blue-600'></i> &nbsp;Grocery order and delivery management <br /> 
        <i className='fa-solid fa-check text-blue-600'></i> &nbsp; Liaise directly with your Concierge <br /> 
        <i className='fa-solid fa-check text-blue-600'></i> &nbsp; Various household errands <br /> 
      </ul>

</div>

        <div className='col-lg-6 col-md-6 col-12'>
            <h2>Our Promise</h2>
            <ul className='list-disc list-inside space-y-4 text-gray-700'>
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>A personalized cleaning specification</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>High quality cleaning service</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>Requests carried out to exacting standards</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>Exceptional customer service</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>Meticulous attention to details</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>Domestic chores completed to your satisfaction</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>Eco-friendly cleaning products</span>
        </li>
      </ul>
      <br /><br />
      <h3><strong>Why choose St Anne’s:</strong></h3>
      <p>We are an ever-reliable brand who is ever-ready to deliver awesome housekeeping services to our elegant clients.</p>
      <ul className='list-disc list-inside space-y-4 text-gray-700'>
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>7 days customer support</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>Professionally trained</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>Dedicated Account Manager</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>Fully security vetted operatives to give you peace of mind that your property is in safe hands</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>Same cleaner every visit</span>
        </li>
        <br />
        <li className='flex items-start space-x-2'>
          <i className='fa-solid fa-arrow-right text-blue-600'></i> &nbsp;
          <span className='font-semibold text-gray-800'>Fully insured.</span>
        </li>
        <br />
       
      </ul>
        </div>
    </div>
</div>

                                    </div>
                                </div>
                                <div className="wpo-related-section">
                                    <h2>More locations</h2>
                                    <div className="row">
                                        {locations.slice(0, 3).map((location, Sitem) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                                                <div className="wpo-related-item">
                                                    {/* <div className="wpo-related-icon">
                                                        <div className="icon">
                                                            <i>
                                                                <Image
                                                                    src={location.sIcon}
                                                                    alt=""
                                                                    width={50} // set appropriate width
                                                                    height={50} // set appropriate height
                                                                />
                                                            </i>
                                                        </div>
                                                    </div> */}
                                                    <div className="wpo-related-text">
                                                        <h3>
                                                            <Link href={`/locations-single/${location.slug}`}>
                                                                {location.sTitle}
                                                            </Link>
                                                        </h3>
                                                        <p>{location.desc.substring(0, 41)}</p> {/* Using substring to limit characters */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default ServiceSinglePage;
