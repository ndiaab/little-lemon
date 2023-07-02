import { useContext } from "react";
import { contextTable } from "../App";

export const ReservationList = () => {
    const { mesTable } = useContext(contextTable);

    const ras = (mesTable.length == 0
        ? "Pas de réservation enregistré pour le moment"
        : "");
        console.log(mesTable)
    return (
        <div>
            <p>{ras}</p>
            {mesTable.map((maReservation, index) => (
                <p
                    key={index}
                >{`Je m'appelle ${maReservation.name} ${maReservation.surname}, j'ai réservé pour ${maReservation.guestNumber} personnes`}</p>
            ))}
        </div>
    );
};
