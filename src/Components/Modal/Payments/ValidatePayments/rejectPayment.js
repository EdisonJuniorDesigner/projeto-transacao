import React from "react";
import { PaymentContainer } from "./styles";
import Error from "../../../../assets/circle-x.svg";

function Reject() {
    return (
        <PaymentContainer>
            <div className="modal-header">
                <h2>Recibo de Pagamento</h2>
            </div>
            <img src={Error} alt="check" />
            <p>O Pagamento não foi concluído.</p>
            <hr></hr>
            <div className="modal-desc-reject">
                <span>Consulte o limite do seu cartão.</span>
            </div>
        </PaymentContainer>
    );
}

export default Reject;
