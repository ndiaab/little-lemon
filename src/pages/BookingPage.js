import { useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

export const updateTimes = (state, format) => {
    const date = new Date(format);
    let day = date.getDay();
    
    // if (isNaN(day)) {
    //     day = 99;
    // }

    // switch (day) {
    //     case 0:
    //         return ["", "19:00", "20:00"];
    //     case 6:
    //         return ["", "19:00", "20:00"];
    //     case 99:
    //         return [];
    //     default:
    //         return ["", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    // }

    return fetchAPI(date);
};

export const initializeTimes = [];
//["","17:00","18:00","19:00","20:00","21:00","22:00"]

const BookingPage = () => {
    const [availableTimes, setAvailableTimes] = useReducer(
        updateTimes,
        initializeTimes
    );
    return (
        <BookingForm
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            submitAPI={submitAPI}
        />
    );
};

export default BookingPage;