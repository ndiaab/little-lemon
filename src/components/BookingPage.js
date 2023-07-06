import { useReducer, useState } from "react";
import { BookingForm } from "./BookingForm";

const updateTimes = (state,format) => {

    const date = new Date(format);
    const day = date.getDay();

    switch (day) {
        case 0:
            return [
            "",
            "19:00",
            "20:00"];
        case 6:
            return [
            "",
            "19:00",
            "20:00"];
        default:
            return [...state];
    }
};

const initializeTimes = [
    "",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
];

export const BookingPage = () => {
    const [availableTimes, setAvailableTimes] = useReducer(
        updateTimes,
        initializeTimes
    );
    return (
        <BookingForm
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
        />
    );
};
