import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import cimg from '/public/images/conatct1.png';
import Image from 'next/image';

const Appointment = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        postcode: '',
        subject: '',
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                company: '',
                phone: '',
                postcode: '',
                subject: ''
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <section className="wpo-contact-section section-padding">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title-s2">
                                    <h2>GET A QUOTE</h2>
                                </div>
                                <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                                    <div className="row">
                                        <div className="col col-lg-12 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.name}
                                                    type="text"
                                                    name="name"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Name" />
                                            </div>
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                        </div>
                                        <div className="col col-lg-12 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.email}
                                                    type="email"
                                                    name="email"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Email" />
                                                {validator.message('email', forms.email, 'required|email')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.company}
                                                    type="text"
                                                    name="company"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Company" />
                                                {validator.message('company', forms.company, 'required')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.phone}
                                                    type="phone"
                                                    name="phone"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Phone" />
                                                {validator.message('phone', forms.phone, 'required|phone')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.postcode}
                                                    type="text"
                                                    name="postcode"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Post Code" />
                                                {validator.message('postcode', forms.postcode, 'required')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <select className="form-control"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    value={forms.subject}
                                                    name="subject">
                                                    <option>Choose a Service</option>
                                                    <option>Housekeeping</option>
                                                    <option>Commercial Cleaning</option>
                                                    <option>Serviced Apartments</option>
                                                </select>
                                                {validator.message('subject', forms.subject, 'required')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn"><i className="fa fa-angle-double-right"
                                            aria-hidden="true"></i> Submit Now</button>
                                    </div>
                                </form>
                                <div className="border-style"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wpo-contact-img">
                                <Image src={cimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Appointment;
