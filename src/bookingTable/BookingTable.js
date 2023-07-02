import React, { useState } from "react";

import {contextTable} from '../App'

import { useContext } from "react";

export const BookingTable = () => {
    const { mesTable, setTable } = useContext(contextTable);
    
    //const dispatch = useDispatch();


    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [guestNumber, setGuestNumber] = useState(0);
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    // Date / time / number of guest / occasion (birthday, anniverssary)
    const errorMessage = "Erreur de saisie sur le formulaire";
    const submittedMessage ='Votre réservation a bien été prise en compte';

    const clearForm = () => {
        setName("");
        setSurname("");
        setGuestNumber(0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name != "" && surname != "" && guestNumber > 0) {
            //dispatch(bookReservation({ name, surname, guestNumber }));
            setTable([...mesTable,{ name, surname, guestNumber }]);
            setError(false);
            setSubmitted(true);
            clearForm();
        } else {
            setError(true);
            setSubmitted(false);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    {error && errorMessage}
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <input
                        type="number"
                        value={guestNumber}
                        onChange={(e) => setGuestNumber(e.target.value)}
                    />
                    <input type="submit" value="Submit" />
                    {submitted && submittedMessage}
                </form>
            </div>
        </>
    );
};
