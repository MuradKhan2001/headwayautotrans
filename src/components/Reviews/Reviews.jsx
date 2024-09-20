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


const Reviews = () => {
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

    return <div className="reviews-container-box">
        <Header/>
        <Navbar/>
        <div className="header-content">
            <div className="home-sloy">
                <div className="home_contents">
                    <div className="left_side">
                        <div className="text-wrapper">
                            <div className="text-large">
                                <p data-aos="zoom-in">HEADWAY AUTO TRANSPORT REVIEWS</p>
                            </div>
                            <div className="des-text">
                                Ensuring our customers' full satisfaction is our priority, and receiving positive
                                feedback on our car transport services brings us immense joy.
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

        <div className="reviews-container">
            <div className="main-title">
                Explore Our Reviews!
            </div>
            <div className="title">
                See What Our Customers are Saying
            </div>
            <div className="slider-box-reviews">
                {comments.map((item, index) => {
                    return <div key={index} className={(index + 1) % 2 === 0 ? "review-large" : "review"}>
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

                            <div className="footer-reviews">
                                <div className="stars">
                                    <img src="./images/star1.png" alt=""/>
                                    <img src="./images/star1.png" alt=""/>
                                    <img src="./images/star1.png" alt=""/>
                                    <img src="./images/star1.png" alt=""/>
                                    <img src="./images/star1.png" alt=""/>
                                </div>

                                <div className="link">
                                    <a target="_blank" href={item.link}>more...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
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
        <Footer/>
    </div>
};

export default Reviews