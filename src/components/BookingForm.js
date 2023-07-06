import { useNavigate } from "react-router-dom";
import React, { useState} from "react";

import { contextTable } from "../App";

import { useContext } from "react";

export const BookingForm = (props) => {
    const { mesTable, setTable } = useContext(contextTable);

    //https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js

    const [resDate, setResDate] = useState(''),
        [resTime, setResTime] = useState(''),
        [guests, setGuests] = useState(0),
        [occasion, setOccasion] = useState('');

    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const errorMessage = "Erreur de saisie sur le formulaire";
    const submittedMessage = "Votre réservation a bien été prise en compte";
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (resDate !== "" && resTime !== "" && guests > 0 && occasion != "") {
            //dispatch(bookReservation({ name, surname, guestNumber }));
            setTable([...mesTable, { resDate, resTime, guests, occasion }]);
            setError(false);
            //ConfirmedBooking
            navigate("/test");
            setSubmitted(true);
        } else {
            setError(true);
            setSubmitted(false);
        }
    };

    const update = (value) => {
        setResDate(value);
        props.setAvailableTimes(value);
    }


    //The options in the booking time field should be displayed from a list of available times. htmlFor now, create a stateful array in the component named availableTimes and use this state variable to populate the time select field options
    return (
        <div>
            <form
                style={{
                    display: "grid",
                    maxWidth: "200px",
                    gap: "20px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={resDate}
                    onChange={(e) => {update(e.target.value)}}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time "
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}
                >
                    {props.availableTimes.map((e,i) => <BookingSlot slot={e} index={i} />)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option></option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <p>
                    {error && errorMessage}
                    {submitted && submittedMessage}
                </p>

                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    );
};



const BookingSlot = (props) => {
    return <option key={props.index}>{props.slot}</option>;
}
