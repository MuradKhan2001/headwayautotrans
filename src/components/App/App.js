import React, {useState, createContext} from "react";
import {Routes, Route} from "react-router-dom";
import {publicRoutes} from "../../rootes";
import NotFound from "../notFound/NotFound";

export const MyContext = createContext();

function App() {
    const [url, setUrl] = useState('http://157.245.37.245/api/');
    return (
        <>
            <MyContext.Provider value={{
                url
            }}>
                <Routes>
                    {
                        publicRoutes.map((route, index) => (
                            <Route key={index} {...route} />
                        ))
                    }
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </MyContext.Provider>
        </>
    );
}

export default App;