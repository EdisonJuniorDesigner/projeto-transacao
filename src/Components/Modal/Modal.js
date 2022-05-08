import React, { useState } from "react";
import { ModalTransaction } from "./styles";
import Mask from "./Payments/Utils/mask";
import { cards } from "./Payments/Cards/card";
import Success from "./Payments/ValidatePayments/successPayment";
import Reject from "./Payments/ValidatePayments/rejectPayment";
import axios from "axios";

function Modal({ username, id = "modal", onClose = () => {}, children }) {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };
    const [hiddenModal, setHiddenModal] = useState(true);
    const [success, setSuccess] = useState(false);
    const [reject, setReject] = useState(false);

    const payment = async (e) => {
        e.preventDefault();

        setHiddenModal(false);
        const formData = new FormData(e.target);
        const value = formData.get("value");
        const card = formData.get("selectCard");
        const selectCard = cards.find(
            (selectCard) => selectCard.card_number === card
        );

        const json = JSON.stringify({
            method: "POST",
            body: {
                card_number: card,
                cvv: selectCard,
                expiry_date: selectCard.expiry_date,
                destination_user_id: username.id,
                value: value,
            },
        });

        await axios.post(
            "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
            json,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        card === "1111111111111111" ? setSuccess(true) : setReject(true);
    };

    return (
        <ModalTransaction id={id} onClick={handleOutsideClick}>
            <div className="modal-container">
                <button className="close" onClick={onClose} />
                <div className="content">
                    {hiddenModal ? (
                        <form onSubmit={payment}>
                            <div className="modal-header">
                                <h2>Pagamento para {username}</h2>
                            </div>
                            <label for="value">Digite o valor:</label>
                            <input
                                type="text"
                                placeholder="R$ 0,00"
                                maxlength={30}
                                onKeyUp={Mask}
                                name="value"
                                required
                            />

                            <label for="selectCard">
                                Informe o seu cartão:
                            </label>
                            <select name="selectCard" defaultValue={"card"}>
                                {cards.map((card) => {
                                    return (
                                        <option
                                            key={card.card_number}
                                            value={card.card_number}
                                        >
                                            Cartão com final{" "}
                                            {card.card_number.substring(12)}
                                        </option>
                                    );
                                })}
                            </select>

                            <input
                                className="buttonPayment"
                                type="submit"
                                value={"Pagar"}
                            />
                        </form>
                    ) : null}

                    {success && <Success username={username} />}
                    {reject && <Reject />}
                </div>
            </div>
        </ModalTransaction>
    );
}

export default Modal;
