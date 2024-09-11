import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import "./index.scss";
import "aos/dist/aos.css";
import Loader from "./components/loader/Loader";
const App = React.lazy(() => import('./components/App/App'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <React.Suspense fallback={<Loader/>}>
            <Router>
                <App/>
            </Router>
        </React.Suspense>
    </React.StrictMode>
);
