import React, {useContext, useEffect} from "react";
import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import {useState} from "react";
import Aos from "aos";
import axios from "axios";
import {MyContext} from "../App/App";


const ForIndividuals = () => {
    let value = useContext(MyContext);
    const navigate = useNavigate();
    const [question, setQuestion] = useState([
        {
            title: "Is my vehicle insured during transport?",
            des: "Trucking damage claims are covered by carrier from $100,000 up to $250,000 cargo insurance per load, and a minimum of 3/4 of a million dollars public liability and property damage."
        },
        {
            title: "Can I put personal items in the car?",
            des: "You can put personal items up to 100 lbs. All Carriers are good without any extra fee if you have around 100-150 lbs.\n" +
                "\n" +
                "If it is more than 100 lbs, it needs to be negotiated with the assigned carrier. Headway auto transport LLC will do our best as much as we do to make it reasonable for you!"
        },
        {
            title: "When is the vehicle going to be picked-up?",
            des: "After an order is placed, we begin the process to assign one of the best available one based on your shipment date. If you need ASAP shipment, we can make it happen within 1-24 or max 48 hours after.\n" +
                "Then you will be given estimated pickup time. The carrier will call you to confirm the details ahead of schedule."
        },
        {
            title: "When will my vehicle be delivered?",
            des: "When you place an order, you will receive an estimated transit time for your shipment. This will give you a window for when your car will be delivered. Transit times depend on moving distance. With each delivery being unique, it is possible that your car would be delivered faster than the estimated transit time provided."
        },
        {
            title: "How do I pay for my auto shipping?",
            des: "We accept all major credit cards, electronic transfer, postal money order, and bank/certified check. No DEPOSIT FEE. We only get reservation fee once the suitable and available carrier is assigned with the guaranteed.\n" +
                "\n" +
                "The rest of the money you will pay ton the delivery spot once you get your car in cash or any certified funds. You can also do payment on Zelle, CashApp or Venmo!"
        }
    ]);
    const [ActiveQuestion, setActiveQuestion] = useState("");
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
        axios.get(`${value.url}contact/`).then((response) => {
            setContact(response.data[0])
        });

        axios.get(`${value.url}comment/`).then((response) => {
            setComments(response.data)
        });

        axios.get(`${value.url}partner/`).then((response) => {
            setPartners(response.data)
        });
        Aos.init({duration: 1000});
    }, []);

    return <div className="for-individuals-container">
        <Header/>
        <Navbar/>
        <div className="header-content">
            <div className="home-sloy">
                <div className="home_contents">
                    <div className="left_side">
                        <div className="text-wrapper">
                            <div className="text-large">
                                <p data-aos="zoom-in">Discover Our Range of Offers!</p>
                            </div>
                            <div className="des-text">
                                Headway auto transport is known for safe and secure auto transportation services
                            </div>
                            <div className="buttons-home">
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
                    </div>
                    <div className="right_side">
                    </div>
                </div>
            </div>
        </div>

        <div data-aos="fade-up" className="about-us">
            <div className="img-side">
                <img src="./images/steps.jpg" alt=""/>
            </div>
            <div className="sides">
                <div className="main-title">
                    Services
                </div>
                <div className="title">
                    Services We offer
                </div>
                <div className="steps">
                    <div data-aos="zoom-in-down" className="step">
                        <img src="./images/arrowhead.png" alt=""/>
                        <div className="text">
                            <div className="title-step">
                                DOOR TO DOOR TRANSPORT
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-down" className="step">
                        <img src="./images/arrowhead.png" alt=""/>
                        <div className="text">
                            <div className="title-step">
                                OPEN AUTO SHIPPING
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-down" className="step">
                        <img src="./images/arrowhead.png" alt=""/>
                        <div className="text">
                            <div className="title-step">
                                ENCLOSED AUTO SHIPPING
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-down" className="step">
                        <img src="./images/arrowhead.png" alt=""/>
                        <div className="text">
                            <div className="title-step">
                                MOTORCYCLE SHIPPING
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-down" className="step">
                        <img src="./images/arrowhead.png" alt=""/>
                        <div className="text">
                            <div className="title-step">
                                BOAT SHIPPING
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-down" className="step">
                        <img src="./images/arrowhead.png" alt=""/>
                        <div className="text">
                            <div className="title-step">
                                RV SHIPPING
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-service">
            <div className="main-title">
                Services
            </div>
            <div className="title">
                Services We offer
            </div>
            <div className="services-box">
                <div data-aos="flip-right" className="service">
                    <div className="img-service">
                        <img src="./images/service1.jpg" alt=""/>
                    </div>
                    <div className="title">DOOR TO DOOR SHIPPING</div>
                    <div className="des">
                        Door-to-door car shipping is the most convenient method of auto transport. You select a specific
                        address for your vehicle to be picked up and dropped off. The truck driver will pick up and drop
                        off your vehicle as close to this desired address as safely and legally possible.
                    </div>
                </div>
                <div data-aos="flip-right" className="service">
                    <div className="img-service">
                        <img src="./images/service2.jpg" alt=""/>
                    </div>
                    <div className="title">OPEN AUTO SHIPPING</div>
                    <div className="des">
                        Our reliable service ensures your vehicle reaches its destination securely and affordably. With
                        open carriers, we offer efficient, cost-effective transport, providing peace of mind for your
                        car's journey.
                    </div>
                </div>
                <div data-aos="flip-right" className="service">
                    <div className="img-service">
                        <img src="./images/service3.jpg" alt=""/>
                    </div>
                    <div className="title">ENCLOSED AUTO SHIPPING</div>
                    <div className="des">
                        Enclosed car transport is a type of auto transport that adds protection for vehicles. It’s a
                        great car shipping option if you need to transport a classic or luxury car. Enclosed carriers
                        can often only carry a few vehicles at the same time, in most cases, up to 7 automobiles.
                    </div>
                </div>
                <div data-aos="flip-right" className="service">
                    <div className="img-service">
                        <img src="./images/service4.jpg" alt=""/>
                    </div>
                    <div className="title">MOTORCYCLE SHIPPING</div>
                    <div className="des">
                        Nationwide motorcycle shipping has never been easier with Headway auto transport. We offer two types
                        of motorcycle transport services to our customers: Door-to-Door (home delivery) and shipping
                        between distribution centers. Home delivery (Door-to-Door) transport is the most common and
                        preferred customer solution.
                    </div>
                </div>
            </div>
        </div>

        <div className="quations-container">
            {question.map((item, index) => {
                return <div key={index} className={`quation ${ActiveQuestion === index ? "active" : ""}`}>
                    <div className="top-side">
                        <div className="number">
                            0{index + 1}
                        </div>
                        <div className="title">
                            {item.title}
                        </div>
                        <div onClick={() => {
                            if (ActiveQuestion === index) {
                                setActiveQuestion("")
                            } else setActiveQuestion(index)
                        }} className={`button ${ActiveQuestion === index ? "rotate-icon" : ""}`}>
                            <img src="./images/Union.png" alt=""/>
                        </div>
                    </div>
                    {ActiveQuestion === index && <div className="des-quation">
                        {item.des}
                    </div>}
                </div>
            })}

        </div>

        <div className="partners">
            <Slider {...settingsPartners}>
                {partners.map((item, index) => {
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

export default ForIndividuals