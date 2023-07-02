import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ReservationList } from "./bookingTable/ReservationList";
import { BookingTable } from "./bookingTable/BookingTable";


import Header from "./components/Header";
import Article from "./components/Article";
import Banner from "./components/Banner";

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
                {<BookingTable />}
                {<Footer />} */}

                {<Header />}

                    <Routes>
                        <Route path="/" exact element={<><Banner /><section><Article /></section></>}/>
                        <Route path="/reservation" element={<BookingTable />} />
                        <Route path="/reservationList" element={<ReservationList />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </contextTable.Provider>
    );
}

export default App;
