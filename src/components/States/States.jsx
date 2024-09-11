import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useContext, useEffect, useState} from "react";
import {MyContext} from "../App/App";
import axios from "axios";
import Aos from "aos";



const States = () => {
    const navigate = useNavigate();
    let value = useContext(MyContext);
    const [comments, setComments] = useState([])
    const [partners, setPartners] = useState([])
    const [contact, setContact] = useState("");
    const settingsPartners = {
        lazyLoad: false,
        slidesToShow: 5,
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        navs: true,
        slidesToScroll: 5,
        initialSlide: 5,
        responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 5, slidesToScroll: 5, infinite: true, dots: false
            }
        }, {
            breakpoint: 600, settings: {
                slidesToShow: 3, slidesToScroll: 3, initialSlide: 3
            }
        }, {
            breakpoint: 480, settings: {
                slidesToShow: 3, slidesToScroll: 3
            }
        }]
    };
    const settingsReviews = {
        lazyLoad: false,
        slidesToShow: 3,
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        navs: true,
        slidesToScroll: 3,
        initialSlide: 3,
        responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: false
            }
        }, {
            breakpoint: 600, settings: {
                slidesToShow: 1, slidesToScroll: 1, initialSlide: 1
            }
        }, {
            breakpoint: 480, settings: {
                slidesToShow: 1, slidesToScroll: 1
            }
        }]
    };
    useEffect(() => {
        axios.get(`${value.url}comment/`).then((response) => {
            setComments(response.data)
        });

        axios.get(`${value.url}partner/`).then((response) => {
            setPartners(response.data)
        });

        axios.get(`${value.url}contact/`).then((response) => {
            setContact(response.data[0])
        });

        Aos.init({duration: 1000});
    }, []);

    return <div className="states-container">
        <Header/>
        <Navbar/>
        <div className="header-content">
            <div className="home-sloy">
                <div className="home_contents">
                    <div className="left_side">
                        <div className="text-wrapper">
                            <div className="text-large">
                                <p data-aos="zoom-in">Shipping a car across the country</p>

                            </div>
                            <div className="des-text">
                                Find cross country shipping deals with Headway auto transport
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
        <div className="delivery-container">
            <div className="main-title">
                Shipping Destinations
            </div>
            <div className="title">
                <div className="title-left">
                    Where We Deliver Your Vehicles in the USA!
                </div>
            </div>
            <div className="contents">
                <div className="content">
                    <div className="img">
                        <img src="./images/state1.png" alt=""/>
                    </div>
                    <div className="title">
                        California
                    </div>
                    <div className="des">
                        Car shipping services anywhere to or from The Golden State
                    </div>
                </div>

                <div className="content">
                    <div className="img">
                        <img src="./images/state2.png" alt=""/>
                    </div>
                    <div className="title">
                        Florida
                    </div>
                    <div className="des">
                        Florida auto transport services, to and from The Sunshine State
                    </div>
                </div>

                <div className="content">
                    <div className="img">
                        <img src="./images/state4.png" alt=""/>
                    </div>
                    <div className="title">
                        Texas
                    </div>
                    <div className="des">
                        Vehicle shipping services to and throughout The Lone Star State
                    </div>
                </div>

                <div className="content">
                    <div className="img">
                        <img src="./images/state3.png" alt=""/>
                    </div>
                    <div className="title">
                        New York
                    </div>
                    <div className="des">
                        Transport your car anywhere to or from The Empire State
                    </div>
                </div>
            </div>
        </div>

        <div className="states">
            <div className="title">Ship your car across the country with Headway auto transport</div>
            <div className="state-box">
                <p>Alabama Car Shipping</p>
                <p>Alaska Car Transport</p>
                <p>Arizona Car Shipping</p>
                <p>Arkansas Car Shipping</p>
                <p>California Car Shipping</p>
                <p>Colorado Car Shipping</p>
                <p>Connecticut Car Shipping</p>
                <p>Delaware Car Shipping</p>
                <p>Florida Car Shipping</p>
                <p>Georgia Car Shipping</p>
                <p>Hawaii Car Transport</p>
                <p>Idaho Car Shipping</p>
                <p>Illinois Car Shipping</p>
                <p>Indiana Car Shipping</p>
                <p>Iowa Car Shipping</p>
                <p>Kansas Car Shipping</p>
                <p>Kentucky Car Shipping</p>
                <p>Louisiana Car Shipping</p>
                <p>Maine Car Shipping</p>
                <p>Maryland Car Shipping</p>
                <p>Massachusetts Car Shipping</p>
                <p>Michigan Car Shipping</p>
                <p>Minnesota Car Shipping</p>
                <p>Mississippi Car Shipping</p>
                <p>Missouri Car Shipping</p>
                <p>Montana Car Shipping</p>
                <p>Nebraska Car Shipping</p>
                <p>Nevada Car Shipping</p>
                <p>New Hampshire Car Shipping</p>
                <p>New Jersey Car Shipping</p>
                <p>New Mexico Car Shipping</p>
                <p>New York Car Shipping</p>
                <p>North Carolina Shipping</p>
                <p>North Dakota Car Shipping</p>
                <p>Ohio Car Shipping</p>
                <p>Oklahoma Car Shipping</p>
                <p>Oregon Car Shipping</p>
                <p>Pennsylvania Car Shipping</p>
                <p>Rhode Island Car Shipping</p>
                <p>South Dakota Car Shipping</p>
                <p>South Carolina Car Shipping</p>
                <p>Tennessee Car Shipping</p>
                <p>Texas Car Shipping</p>
                <p>Utah Car Shipping</p>
                <p>Vermont Car Shipping</p>
                <p>Virginia Car Shipping</p>
                <p>Washington Car Shipping</p>
                <p>West Virginia Car Shipping</p>
                <p>Wisconsin Car Shipping</p>
                <p>Wyoming Car Shipping</p>
            </div>
        </div>

        <div className="partners">
            <Slider {...settingsPartners}>
                {partners.map((item, index)=>{
                    return <div key={index} className="logo">
                        <img src={item.logo} alt=""/>
                    </div>
                })}
            </Slider>
        </div>
        <div className="reviews-container">
            <div className="main-title">
                Explore Our Reviews!
            </div>
            <div className="title">
                See What Our Customers are Saying
            </div>
            <div className="slider-box-reviews">
                <Slider {...settingsReviews}>
                    {comments.map((item, index) => {
                        return <div key={index} className="review">
                            <div className="content">
                                <div className="header">
                                    <div className="left">
                                        <div className="name">
                                            <div className="name-user">{item.name}</div>
                                        </div>
                                    </div>
                                    <div className="google">
                                        <img src={item.image} alt=""/>
                                    </div>
                                </div>
                                <div className="des">
                                    {item.comment}
                                </div>
                                <div className="stars">
                                    <img src="./images/star1.png" alt=""/>
                                    <img src="./images/star1.png" alt=""/>
                                    <img src="./images/star1.png" alt=""/>
                                    <img src="./images/star1.png" alt=""/>
                                    <img src="./images/star1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    })}


                </Slider>
            </div>
        </div>
        <Footer/>
    </div>
};

export default States