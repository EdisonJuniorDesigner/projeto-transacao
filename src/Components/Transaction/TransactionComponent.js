import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";

function TransactionComponent() {
    // Hooks
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectUser, setSelectUser] = useState(null);

    // Redux
    const users = useSelector((state) => state.allUsers.users);

    const renderList = users.map((user, index) => {
        const { id, name, img, username } = user;
        const renderModal = (username) => {
            setSelectUser(username);
            setIsModalVisible(true);
        };

        return (
            <div className="container-transactions" key={id}>
                <div className="transaction">
                    <div className="desc">
                        <img className="user-img" src={img} alt="user-img" />
                        <div className="user-desc">
                            <span>{name}</span>
                            <span>
                                ID: {id} - Username: {username}
                            </span>
                        </div>
                    </div>
                    <button
                        className="pay-button"
                        onClick={() => renderModal(username)}
                    >
                        Pagar
                    </button>
                    {isModalVisible ? (
                        <Modal
                            username={selectUser}
                            onClose={() => setIsModalVisible(false)}
                        ></Modal>
                    ) : null}
                </div>
            </div>
        );
    });

    return <>{renderList}</>;
}

export default TransactionComponent;
