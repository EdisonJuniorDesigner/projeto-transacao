import React, { useEffect } from "react";
import Plus from "../../assets/plus.svg";
import { ContainerTransaction } from "./styles";
import TransactionComponent from "./TransactionComponent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actions/userActions";

function Transaction() {
    const users = useSelector((state) => state.allUsers.users);
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const response = await axios
            .get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce")
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(setUser(response.data));
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    console.log("Users: ", users);

    return (
        <ContainerTransaction>
            <div className="container-menu">
                <div className="container-menu-button">Recentes</div>
                <div className="container-menu-button">Meu Perfil</div>
            </div>
            <div class="container-add">
                <img src={Plus} alt="plus" />
                <span>Adicionar cartão de crédito</span>
            </div>

            <h1>Transações Pendentes</h1>

            <TransactionComponent />

            <hr></hr>

            <span className="title-tools">Ferramentas utilizadas</span>
            <div className="tools">
                <ul>
                    <span>•</span>
                    <li>
                        <a
                            href="https://pt-br.reactjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            React
                        </a>
                    </li>
                    <span>•</span>
                    <li>
                        <a
                            href="https://redux.js.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Redux
                        </a>
                    </li>
                    <span>•</span>
                    <li>
                        <a
                            href="https://styled-components.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Styled Components
                        </a>
                    </li>
                    <span>•</span>
                    <li>
                        <a
                            href="https://axios-http.com/ptbr/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Axios
                        </a>
                    </li>
                    <span>•</span>
                    <li>
                        <a
                            href="https://www.figma.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Figma
                        </a>
                    </li>
                </ul>
            </div>
        </ContainerTransaction>
    );
}

export default Transaction;
