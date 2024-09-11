import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import {useFormik} from "formik";
import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {MyContext} from "../App/App";
import Aos from "aos";


const Customer = () => {
    let value = useContext(MyContext);
    const [success, setSuccess] = useState(false)
    const [checkBoxQuote, setCheckBoxQuote] = useState(false);
    const validate = (values) => {
        const errors = {};

        if (!values.phone) {
            errors.phone = "Required";
        } else if (isNaN(Number(values.phone))) {
            errors.phone = "Required";
        }

        if (!values.name) {
            errors.name = "Required";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Required';
        }

        if (!values.text) {
            errors.text = "Required";
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            text: ""
        },
        validate,
        onSubmit: (values) => {

            if (checkBoxQuote) {
                axios.post(`${value.url}customer-load/`, values).then((response) => {
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                    }, 4000)
                    formik.resetForm()
                    setCheckBoxQuote(false)
                });
            }
        },
    });

    const [contact, setContact] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${value.url}contact/`).then((response) => {
            setContact(response.data[0])
        });

        Aos.init({duration: 1000});
    }, []);

    return <div className="customer-container">
        <Header/>
        <Navbar/>
        {
            success && <div className="alert">
                <div className="left-side">
                    <img src="./images/green.svg" alt=""/>
                </div>
                <div className="right-side">
                    Message sent
                </div>
                <div className="xbtn">
                    <img onClick={() => setSuccess(false)} src="./images/x-button.png" alt=""/>
                </div>
            </div>
        }

        <div className="header-content">
            <div className="home-sloy">
                <div className="home_contents">
                    <div className="left_side">
                        <div className="text-wrapper">
                            <div className="text-large">
                                <p data-aos="zoom-in">CONTACT HEADWAY AUTO TRANSPORT</p>
                            </div>
                            <div className="des-text">
                                We're eager to receive your feedback.
                            </div>
                            <div className="buttons-home">
                                <button onClick={() => navigate("/get-quote")} type="button" className="button-home">
                                    Get a quote
                                </button>
                                <a href={`tel:${contact.phone1}`} className="button-home">
                                    Call now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right_side">
                    </div>
                </div>
            </div>
        </div>
        <div className="form-box">
            <div className="title">
                QUICK FEEDBACK FORM
            </div>
            <form onSubmit={formik.handleSubmit} className="input-box">
                <input className={formik.errors.name === "Required" ? "Required" : ""}
                       onChange={formik.handleChange}
                       value={formik.values.name}
                       name="name" placeholder="Your full name*" type="text"/>

                <input className={formik.errors.email === "Required" ? "Required" : ""}
                       onChange={formik.handleChange}
                       value={formik.values.email}
                       name="email" placeholder="Email*" type="text"/>

                <input className={formik.errors.phone === "Required" ? "Required" : ""}
                       onChange={formik.handleChange}
                       value={formik.values.phone}
                       name="phone" placeholder="Phone number*" type="text"/>

                <textarea className={formik.errors.text === "Required" ? "Required" : ""}
                          onChange={formik.handleChange}
                          value={formik.values.text}
                          name="text" placeholder="Message"></textarea>

                <div className="check-box">
                    <div className="checkbox-wrapper-13">
                        <input
                            checked={checkBoxQuote}
                            onChange={(e) => {
                                setCheckBoxQuote((prevState) => !prevState);
                            }}
                            id="c1-13"
                            type="checkbox"
                        />
                    </div>
                    <label htmlFor="c1-13">
                        By checking this box, you agree to our Terms and Privacy Policy, allowing us to send
                        sms to the provided phone number. Your consent is not required for
                        purchasing any items, commodities, or services. Message and data rates may apply.
                    </label>
                </div>

                <button type="submit"
                        className={`send-btn ${checkBoxQuote ? "send-btn-active" : ""}`}>Submit
                </button>
            </form>
        </div>
        <Footer/>
    </div>
};

export default Customer