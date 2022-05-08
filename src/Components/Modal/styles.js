import styled from "styled-components";

export const ModalTransaction = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.03);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-container {
        background: #fff;
        color: #000;
        width: 650px;
        height: 75%;
        border-radius: 20px;

        .close {
            background: transparent;
            width: 32px;
            height: 32px;
            right: calc(-100% + 64px);
            top: 16px;
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: center;

            &:before,
            &:after {
                content: " ";
                position: absolute;
                width: 2.5px;
                height: 24px;
                background-color: #fff;
            }
            &:before {
                transform: rotate(45deg);
            }
            &:after {
                transform: rotate(-45deg);
            }
        }

        .content {
            background: none;
            padding: 15px;
            display: flex;
            justify-content: center;

            form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-top: 40px;
                width: 90%;
                padding: 20px;
                background: none;
                border: 1px solid #dbdbdb;
                border-radius: 10px;

                .modal-header {
                    background: none;

                    h2 {
                        background: none;
                        text-align: center;
                        margin-bottom: 50px;
                    }
                }

                label {
                    background: none;
                }

                input {
                    background: none;
                    border: none;
                    border: 1px solid #dbdbdb;
                    padding: 15px 10px;
                    font-size: 15px;
                    margin: 15px 0;
                }

                select {
                    background: none;
                    border: none;
                    margin: 15px 0;
                    border: 1px solid #dbdbdb;
                    padding: 15px 10px;
                    font-size: 15px;

                    option {
                        background: none;
                    }
                }

                .buttonPayment {
                    background: #ff9839;
                    border: none;
                    border-radius: 15px;
                    font-size: 18px;
                    cursor: pointer;
                    transition-duration: 0.5s;

                    :hover {
                        background: #db7215;
                        color: #fff;
                    }
                }
            }
        }
    }

    @media (max-width: 660px) {
        .modal-container {
            width: 90%;
        }
    }
`;
