import Home from "./components/Home/Home";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import ForIndividuals from "./components/ForIndividuals/ForIndividuals";
import BussinesPageOne from "./components/for-bussiness/BussinesPageOne";
import BussinesPageTwo from "./components/for-bussiness/BussinesPageTwo";
import BussinesPageThree from "./components/for-bussiness/BusinessPageThree";
import Reviews from "./components/Reviews/Reviews";
import OurTeam from "./components/OurTeam/OurTeam";
import AboutUs from "./components/AboutUs/Aboutus";
import States from "./components/States/States";
import GetQuote from "./components/GetQuote/GetQuote";
import Carrier from "./components/carrier/Carrier";
import Customer from "./components/customer/Customer";
import PrivacyPolicy from "./components/policy-privency/PrivacyPolicy";
import TermsAndConditions from "./components/Terms-and-conditions/TermsAndConditions";
import Success from "./components/success/Success";

export const publicRoutes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/how-it-works",
        element: <HowItWorks/>
    },
    {
        path: "/for-individuals",
        element: <ForIndividuals/>
    },
    {
        path: "/auto-dealerships",
        element: <BussinesPageOne/>
    },
    {
        path: "/auto-auctions",
        element: <BussinesPageTwo/>
    },
    {
        path: "/rental-car-companies",
        element: <BussinesPageThree/>
    },
    {
        path: "/reviews",
        element: <Reviews/>
    },
    {
        path: "/our-team",
        element: <OurTeam/>
    },
    {
        path: "/about-us",
        element: <AboutUs/>
    },
    {
        path: "/states",
        element: <States/>
    },
    {
        path: "/get-quote",
        element: <GetQuote/>
    },
    {
        path: "/carrier",
        element: <Carrier/>
    },
    {
        path: "/customer",
        element: <Customer/>
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>
    },
    {
        path: "/terms-and-conditions",
        element: <TermsAndConditions/>
    },
    {
        path: "/success",
        element: <Success/>
    }
];