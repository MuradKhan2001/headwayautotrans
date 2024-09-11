import "./header-style.scss"
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Aos from "aos";
import {MyContext} from "../App/App";

const Header = () => {
    let value = useContext(MyContext);
    const [contact, setContact] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${value.url}contact/`).then((response) => {
            setContact(response.data[0])
        });

        Aos.init({duration: 1000});
    }, []);

    return <div className="header-container">
        <div onClick={() => navigate("/")} className="logo">
            <img src="./images/headway-logo.png" alt=""/>
        </div>
        <div className="information-wrapper">
            <div className="info-box">
                <div className="icon-info">
                    <img src="./images/clock.png" alt=""/>
                </div>
                <div className="text-information">
                    <div className="title">
                        <div> Mon to Sat: 08:00 AM to 06:00 PM</div>
                    </div>
                </div>
            </div>
            <div className="info-box">
                <div className="icon-info">
                    <img src="./images/mail.png" alt=""/>
                </div>
                <div className="text-information">
                    <div className="title">Email</div>
                    {contact.email}
                </div>
            </div>
            <div className="info-box">
                <div className="icon-info">
                    <img src="./images/telephone.png" alt=""/>
                </div>
                <div className="text-information">
                    <div className="title">
                        Call Us
                    </div>
                    (513) 715-6616
                </div>
            </div>
        </div>
    </div>
};

export default Header