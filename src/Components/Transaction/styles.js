import styled from "styled-components";

export const ContainerTransaction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;

    .container-menu {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        width: 100%;
        margin: 0 auto;
        background: #7a3bc7;
        border-radius: 15px;

        .container-menu-button {
            color: #fff;
            background: none;
            padding: 15px 100px;
            border-radius: 15px;
            cursor: pointer;
        }
        .container-menu-button:first-child {
            background: linear-gradient(to right, #813dd9, #8d39d5);
        }

        @media (max-width: 590px) {
            .container-menu-button {
                padding: 15px 30px;
            }
        }
    }

    .container-add {
        margin: 30px 0;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 30px;
            margin-right: 15px;
            cursor: pointer;
        }

        span {
            font-size: 16px;
            color: #fff;
            cursor: pointer;
        }
    }

    h1 {
        margin: 20px 0;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
    }

    .container-transactions {
        display: flex;
        flex-direction: column;

        .transaction {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background-color: #7a3bc7;
            padding: 20px 15px;
            border-radius: 15px;
            margin-bottom: 15px;

            .desc {
                background: none;
                display: flex;
                align-items: center;
                img {
                    background: none;
                    width: 80px;
                    border-radius: 50%;
                    margin-right: 15px;
                }

                @media (max-width: 480px) {
                    .user-img {
                        width: 120px;
                        margin-bottom: 15px;
                        margin-right: none;
                    }
                }

                .user-desc {
                    background: none;
                    display: flex;
                    flex-direction: column;
                    span {
                        background: none;
                        color: #fff;
                    }
                }
            }

            button {
                background: #ff9839;
                padding: 15px 30px;
                font-size: 14px;
                color: #fff;
                border: none;
                border-radius: 15px;
                cursor: pointer;
                transition-duration: 0.5s;
            }

            .pay-button:hover {
                background: #db7215;
                color: #fff;
            }

            @media (max-width: 480px) {
                .pay-button {
                    width: 90%;
                }
            }
        }

        @media (max-width: 480px) {
            .transaction,
            .desc {
                flex-direction: column;
                justify-content: center;
                text-align: center;
            }

            .desc {
                margin-bottom: 20px;
            }
        }
    }

    .title-tools {
        margin: 30px 0 15px;
        text-align: center;
        color: #fff;
    }

    .tools ul {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;

        span {
            margin-right: 5px;
            color: #ff9839;
        }

        li {
            margin-right: 10px;

            a {
                text-decoration: none;
                transition-duration: 0.5s;
            }
            a:hover {
                color: #ff9839;
            }
        }
    }
`;
