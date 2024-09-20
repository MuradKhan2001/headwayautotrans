import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import {MyContext} from "../App/App";
import Slider from "react-slick";
import "./style.scss"

const ReviwsBox = () => {
    let value = useContext(MyContext);
    const [comments, setComments] = useState([])

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
    }, []);

    return <div className="reviews-container">
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


            </Slider>
        </div>
    </div>
}

export default ReviwsBox