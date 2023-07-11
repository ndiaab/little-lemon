import { useNavigate } from "react-router-dom";
import React from "react";

import { contextTable } from "../App";

import { useContext } from "react";

const BookingForm = (props) => {
    const { mesTable, setTable } = useContext(contextTable);

    //https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js

    const [resDate, setResDate] = React.useState(""),
        [resTime, setResTime] = React.useState(""),
        [guests, setGuests] = React.useState(0),
        [occasion, setOccasion] = React.useState("");

    const [error, setError] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const errorMessage = "Erreur de saisie sur le formulaire";
    const submittedMessage = "Votre réservation a bien été prise en compte";
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        if (disableSubmit()) {
            if (props.submitAPI({ resDate, resTime, guests, occasion })) {
                //dispatch(bookReservation({ name, surname, guestNumber }));
                setTable([...mesTable, { resDate, resTime, guests, occasion }]);
                setError(false);
                //ConfirmedBooking
                setSubmitted(true);
                navigate("/confirmation");
            }
        } else {
            setError(true);
            setSubmitted(false);
        }
    };

    const update = (value) => {
        value == '' && setResTime('');
        setResDate(value);
        props.setAvailableTimes(value);
    };

    const disableSubmit = () => {
        return resDate !== "" && resTime !== "" && guests > 0 && occasion != "";
    };

    const BookingSlot = (props) => {
        return <option key={props.index}>{props.slot}</option>;
    };

    //The options in the booking time field should be displayed from a list of available times. htmlFor now, create a stateful array in the component named availableTimes and use this state variable to populate the time select field options
    return (
        <div>
            <h2>Form reservation</h2>
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
                    required="true"
                    onChange={(e) => {
                        update(e.target.value);
                    }}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time "
                    value={resTime}
                    required="true"
                    onChange={(e) => setResTime(e.target.value)}
                >
                    <BookingSlot slot="" index="0" />
                    {props.availableTimes.map((e, i) => (
                        <BookingSlot slot={e} index={i} />
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    required="true"
                    onChange={(e) => setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    required="true"
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

                <input
                    type="submit"
                    value="Make Your reservation"
                    disabled={!disableSubmit()}
                />
            </form>
        </div>
    );
};

export default BookingForm;