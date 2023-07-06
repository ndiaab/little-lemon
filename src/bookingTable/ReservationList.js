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
                >{`Table réservé le : ${maReservation.resDate} à  ${maReservation.resTime}, pour  ${maReservation.guests} personnes à l'occasion de ${maReservation.occasion}`}</p>
            ))}
        </div>
    );
};
