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

const Carrier = () => {
        let value = useContext(MyContext);
        const [contact, setContact] = useState("");
        const navigate = useNavigate();
        const [success, setSuccess] = useState(false);
        const [checkBoxQuote, setCheckBoxQuote] = useState(false);
        const validate = (values) => {
            const errors = {};

            if (!values.phone) {
                errors.phone = "Required";
            } else if (isNaN(Number(values.phone))) {
                errors.phone = "Required";
            }

            if (!values.company_name) {
                errors.company_name = "Required";
            }

            if (!values.usdot) {
                errors.usdot = "Required";
            }

            if (!values.load_number) {
                errors.load_number = "Required";
            }

            if (!values.pickup_date) {
                errors.pickup_date = "Required";
            }

            if (!values.dropof_date) {
                errors.dropof_date = "Required";
            }

            if (!values.text) {
                errors.text = "Required";
            }

            return errors;
        };
        const formik = useFormik({
            initialValues: {
                company_name: "",
                usdot: "",
                phone: "",
                load_number: "",
                pickup_date: "",
                dropof_date: "",
                text: ""
            },
            validate,
            onSubmit: (values) => {
                axios.post(`${value.url}carrier-load/`, values).then((response) => {
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                    }, 4000)
                    formik.resetForm()
                });
            },
        });

        useEffect(() => {
            axios.get(`${value.url}contact/`).then((response) => {
                setContact(response.data[0])
            });
            Aos.init({duration: 1000});
        }, []);

        return <div className="carrier-container">
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
                                    <p data-aos="zoom-in">CARRIER NETWORK IN USA</p>
                                </div>
                                <div className="des-text">
                                    Trusted company offering top-quality loads in the USA.
                                </div>
                                <div className="buttons-home">
                                    <button onClick={() => navigate("/get-quote")} type="button"
                                            className="button-home">
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

            <form onSubmit={formik.handleSubmit} className="form-box">
                <div className="title">
                    Request a load
                </div>

                <div className="input-box">
                    <input className={formik.errors.company_name === "Required" ? "Required" : ""}
                           onChange={formik.handleChange}
                           value={formik.values.company_name}
                           name="company_name" placeholder="Company name*" type="text"/>

                    <input className={formik.errors.usdot === "Required" ? "Required" : ""}
                           onChange={formik.handleChange}
                           value={formik.values.usdot}
                           name="usdot" placeholder="USDOT*" type="text"/>

                    <input
                        className={formik.errors.phone === "Required" ? "Required" : ""}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        name="phone" placeholder="Phone number*" type="text"/>

                    <input className={formik.errors.load_number === "Required" ? "Required" : ""}
                           onChange={formik.handleChange}
                           value={formik.values.load_number}
                           name="load_number" placeholder="Load number*" type="text"/>

                    <label htmlFor="date1">Pick up date</label>
                    <input className={formik.errors.pickup_date === "Required" ? "Required" : ""}
                           onChange={formik.handleChange}
                           value={formik.values.pickup_date}
                           name="pickup_date" type="date"/>

                    <label htmlFor="date2">Drop off date</label>
                    <input className={formik.errors.dropof_date === "Required" ? "Required" : ""}
                           onChange={formik.handleChange}
                           value={formik.values.dropof_date}
                           name="dropof_date" type="date"/>

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

                    <button type="submit" className={`send-btn ${checkBoxQuote ? "send-btn-active" : ""}`}>Submit</button>
                </div>
            </form>
            <Footer/>
        </div>
    }
;

export default Carrier