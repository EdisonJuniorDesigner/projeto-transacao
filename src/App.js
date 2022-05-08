import React from "react";
import Header from "./Components/Header/Header";
import Transaction from "./Components/Transaction/Transaction";
import { Container } from "./styles";

function App() {
    return (
        <Container>
            <Header />
            <Transaction />
        </Container>
    );
}

export default App;
