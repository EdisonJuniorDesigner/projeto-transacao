import styled from "styled-components";

export const PaymentContainer = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-top: 25px;
        background: none;
        text-align: center;
        font-size: 18px;
    }

    img {
        background: none;
        width: 65px;
    }

    hr {
        color: black;
        width: 80%;
        margin: 40px 0;
    }

    .modal-desc-check {
        background: #26d366;
        padding: 15px;
        border-radius: 10px;
        span {
            background: none;
        }
        text-align: center;
    }

    .modal-desc-reject {
        background: #f15757;
        padding: 15px;
        border-radius: 10px;
        span {
            background: none;
        }
        text-align: center;
    }

    .modal-header {
        background: none;

        h2 {
            background: none;
            text-align: center;
            margin: 50px 0 60px;
        }
    }
`;
