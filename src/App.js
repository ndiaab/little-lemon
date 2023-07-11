import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import ReservationList from "./components/ReservationList";

import "./App.css";

import logo from "./image/Asset 16@4x.png";


export const contextTable = createContext([]);

function App() {
    const [mesTable, setTable] = useState([]);
    return (
        <contextTable.Provider value={{ mesTable, setTable }}>
            <BrowserRouter>
                <div className="App" >
                <Link to="/"><img src={logo} style={{width : "20rem", margin: "1rem"}} /></Link>
                    {<Header />}
                    <Routes>
                        <Route
                            path="/"
                            exact
                            element={<WelcomePage />}
                        />
                        <Route path="/reservation" element={<BookingPage />} />
                        <Route
                            path="/reservationList"
                            element={<ReservationList />}
                        />
                        <Route
                            path="/confirmation"
                            element={<ConfirmedBooking />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </contextTable.Provider>
    );
}

export default App;
