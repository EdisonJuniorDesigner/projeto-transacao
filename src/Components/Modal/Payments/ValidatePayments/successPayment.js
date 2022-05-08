import React from "react";
import { PaymentContainer } from "./styles";
import Check from "../../../../assets/circle-check.svg";

function Success({ username }) {
    return (
        <PaymentContainer>
            <div className="modal-header">
                <h2>Recibo de Pagamento</h2>
            </div>
            <img src={Check} alt="check" />
            <p>O Pagamento foi concluído para {username}.</p>
            <hr></hr>
            <div className="modal-desc-check">
                <span>Consulte seu extrato para mais informações.</span>
            </div>
        </PaymentContainer>
    );
}

export default Success;
