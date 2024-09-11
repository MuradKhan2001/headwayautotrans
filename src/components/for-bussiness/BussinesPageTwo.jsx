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


const BussinesPageTwo = () => {
    let value = useContext(MyContext);
    const navigate = useNavigate();
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

    return <div className="for-business-container">
        <Header/>
        <Navbar/>
        <div className="header-content header-content-two">
            <div className="home-sloy">
                <div className="home_contents">
                    <div className="left_side">
                        <div className="text-wrapper">
                            <div className="text-large">
                                <p data-aos="zoom-in">When timing is crucial, rely on Headway auto transport</p>
                            </div>
                            <div className="des-text">
                                Fast, flexible and reliable nationwide auto transport and logistics solutions for auto
                                auctions
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

        <div className="section-works">
            <div className="sides">
                <img src="./for-business/two/photo1.jpg" alt=""/>
            </div>
            <div className="sides-text">
                <div className="title">
                    Transport vehicles quickly and conveniently
                </div>
                <div className="des">
                    You’re not just running an auction business, you’re orchestrating hundreds of moves with such
                    precision that top-rated surgeons would be impressed. One wrong move, miscommunication or delay and
                    your business, as well as those of your buyers and sellers, could lose money. That’s why having the
                    right transportation and logistics partner on your team is critically important.
                    Headway auto transport has the technology and carrier resources to efficiently transport inbound and
                    outbound vehicles for your auto auction operation.
                </div>
            </div>
        </div>

        <div className="section-works">
            <div className="sides-text">
                <div className="title">
                    Single-unit move expertise
                </div>
                <div className="des">
                    We are the headway in single-unit moves and have the capacity to pickup or deliver vehicles just
                    around the corner or more than 140 miles away. Whether you have a single vehicle to transport or one
                    hundred, Headway auto transport’s scalable capacity provides quick response with skilled vehicle handling
                    and average pickup and transit times lower than the competition.
                </div>
            </div>
            <div className="sides">
                <img src="./for-business/two/photo2.png" alt=""/>
            </div>
        </div>

        <div className="section-works">
            <div className="sides">
                <img src="./for-business/two/photo3.jpg" alt=""/>
            </div>
            <div className="sides-text">
                <div className="title">
                    Nationwide pickup and delivery coverage
                </div>
                <div className="des">
                    Our vetted network of more than 16,000 carriers includes small, independent owner operators in
                    markets from coast to coast. All carriers are screened, monitored and evaluated on a regular basis
                    to ensure they meet insurance and safety requirements. They understand and respect the strict
                    security protocols that must be followed in the auction industry.
                </div>
            </div>
        </div>

        <div className="section-works">
            <div className="sides-text">
                <div className="title">
                    Technologies for speed and efficiency
                </div>
                <div className="des">
                    If you leverage auction software, we can seamlessly integrate with your system so you can quickly
                    book orders and gain visibility into all movements, all on one platform. To speed unloading, improve
                    accuracy and reduce the billing cycle, Headway auto transport uses electronic proof of delivery (ePOD) and
                    digital bill of lading (BOL).
                </div>
            </div>
            <div className="sides">
                <img src="./for-business/two/photo4.jpg" alt=""/>
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

export default BussinesPageTwo