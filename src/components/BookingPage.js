import { useReducer, useState } from "react";
import { BookingForm } from "./BookingForm";
import { fetchAPI, submitAPI } from "../api";

const updateTimes = (state, format) => {
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

const initializeTimes = [];
//["","17:00","18:00","19:00","20:00","21:00","22:00"]

export const BookingPage = () => {
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
