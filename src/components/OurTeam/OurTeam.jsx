import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useContext, useEffect, useState} from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import axios from "axios";
import Aos from "aos";
import {MyContext} from "../App/App";


const OurTeam = () => {
    let value = useContext(MyContext);
    const [counterOn, setCounterOn] = useState(false)
    const navigate = useNavigate();
    const [contact, setContact] = useState("");
    const [statistics, setStatistic] = useState();
    const [partners, setPartners] = useState([]);
    const [supervisor, setSetSupervisor] = useState([]);
    const [admin, setAdmin] = useState([]);

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
    const settingsPersons = {
        lazyLoad: false,
        slidesToShow: 5,
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        navs: true,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 5, slidesToScroll: 5, infinite: true, dots: false
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
        axios.get(`${value.url}partner/`).then((response) => {
            setPartners(response.data)
        });
        axios.get(`${value.url}statistics/`).then((response) => {
            setStatistic(response.data[0])
        });
        axios.get(`${value.url}user/supervisor/`).then((response) => {
            setSetSupervisor(response.data)
        });
        axios.get(`${value.url}user/admin/`).then((response) => {
            setAdmin(response.data)
        });
        axios.get(`${value.url}contact/`).then((response) => {
            setContact(response.data[0])
        });
        Aos.init({duration: 1000});
    }, []);


    return <div className="our-team-container">
        <Header/>
        <Navbar/>
        <div className="header-content">
            <div className="home-sloy">
                <div className="home_contents">
                    <div className="left_side">
                        <div className="text-wrapper">
                            <div className="text-large">
                                <p data-aos="zoom-in">OUR TEAM</p>
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
        <div className="main-box">
            <div className="titles">
                <div className="title-min">
                    Our team
                </div>
                <div className="main-title">
                    MEET OUR TEAM
                </div>
            </div>
            <div className="team-box">
                {supervisor.map((item, index) => {
                    return <div key={index} className="person">
                        <div className="photo">
                            {item.image ?
                                <img className="img-person" src={`https://api.leaderautoship.com/` + item.image} alt=""/> :
                                <img src="./images/person2.png" alt=""/>}
                        </div>
                        <div className="bottom-text">
                            <div className="name">{item.name}</div>
                            <div className="position">{item.position}</div>
                            <div className="contact">
                                <div className="icon">
                                    <img src="./images/mail.png" alt=""/>
                                </div>
                                <a href={`mailto:${item.email}`} className="name">{item.email}</a>
                            </div>
                            <div className="contact">
                                <div className="icon">
                                    <img src="./images/telephone.png" alt=""/>
                                </div>
                                <a href={`tel:${item.phone}`} className="name">{item.phone}</a>
                            </div>
                        </div>
                    </div>
                })}

            </div>
            <div className="team-box-mobile">
                <Slider {...settingsPersons}>
                    {supervisor.map((item, index) => {
                        return <div key={index} className="person">
                            <div className="photo">
                                {item.image ?
                                    <img className="img-person" src={`https://api.leaderautoship.com/` + item.image} alt=""/> :
                                    <img src="./images/person2.png" alt=""/>}
                            </div>
                            <div className="bottom-text">
                                <div className="name">{item.name}</div>
                                <div className="position">{item.position}</div>
                                <div className="contact">
                                    <div className="icon">
                                        <img src="./images/mail.png" alt=""/>
                                    </div>
                                    <a href={`mailto:${item.email}`} className="name">{item.email}</a>
                                </div>
                                <div className="contact">
                                    <div className="icon">
                                        <img src="./images/telephone.png" alt=""/>
                                    </div>
                                    <a href={`tel:${item.phone}`} className="name">{item.phone}</a>
                                </div>
                            </div>
                        </div>
                    })}
                </Slider>
            </div>
        </div>
        <div className="admins-box">
            <div className="main-title">
                TEAM MEMBERS
            </div>
            <div className="team-box">
                {admin.map((item, index) => {
                    return <div key={index} className="person">
                        <div className="photo">
                            {item.image ?
                                <img className="img-person" src={`https://api.leaderautoship.com/` + item.image} alt=""/> :
                                <img src="./images/person2.png" alt=""/>}
                        </div>
                        <div className="bottom-text">
                            <div className="name">{item.name}</div>
                            <div className="position">{item.position}</div>
                            <div className="contact">
                                <div className="icon">
                                    <img src="./images/mail.png" alt=""/>
                                </div>
                                <a href={`mailto:${item.email}`} className="name">{item.email}</a>
                            </div>
                            <div className="contact">
                                <div className="icon">
                                    <img src="./images/telephone.png" alt=""/>
                                </div>
                                <a href={`tel:${item.phone}`} className="name">{item.phone}</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <div className="counter">
            <div className="title">
                The numbers show Who we are
            </div>
            <div className="counts">
                <div className="count">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="num">
                            {counterOn && <CountUp start={0} end={statistics && statistics.clients} duration={2} delay={0}/>}
                            +
                        </div>
                    </ScrollTrigger>
                    <div className="text">
                        SATISFIED CUSTOMER
                    </div>
                </div>
                <div className="count">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="num">
                            {counterOn && <CountUp start={0} end={ statistics && statistics.orders} duration={2} delay={0}/>}
                            +
                        </div>
                    </ScrollTrigger>
                    <div className="text">
                        REVIEWS
                    </div>
                </div>
                <div className="count">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="num">
                            {counterOn && <CountUp start={0} end={statistics && statistics.projects} duration={2} delay={0}/>}
                            +
                        </div>
                    </ScrollTrigger>
                    <div className="text">
                        EXPERIENCE
                    </div>
                </div>
                <div className="count">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="num">
                            {counterOn && <CountUp start={0} end={statistics && statistics.cities} duration={2} delay={0}/>}
                            +
                        </div>
                    </ScrollTrigger>
                    <div className="text">
                        DRIVERS
                    </div>
                </div>
            </div>
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
        <Footer/>
    </div>
};

export default OurTeam