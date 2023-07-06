import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ReservationList } from "./bookingTable/ReservationList";
import { BookingPage } from "./components/BookingPage";


import Header from "./components/Header";
import Article from "./components/Article";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import './App.css';

export const contextTable = createContext([]);

function App() {
    
    const [mesTable, setTable] = useState([]);
    return (
        <contextTable.Provider value={{mesTable, setTable}}>
            <BrowserRouter>
                <div className="App">
                    {/* {<Header />}
                {<Banner />}
                <section>{<Article />}</section>
                {<BookingPage />}
                {<Footer />} */}

                {<Header />}

                    <Routes>
                        <Route path="/" exact element={<><Banner /><section><Article /></section><Footer /></>}/>
                        <Route path="/reservation" element={<BookingPage />} />
                        <Route path="/reservationList" element={<ReservationList />}/>
                        <Route path="/test" element={<div>Félicitations</div>}/>
                        
                    </Routes>
                </div>
            </BrowserRouter>
        </contextTable.Provider>
    );
}

export default App;
