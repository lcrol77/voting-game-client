import { useState, useEffect } from "react";
import Container from "./components/Layout/Container";
import Toggle from "./components/Toggle";
import socket from "./utils/sockets/socket";


function App() {
    return (
        <Container>
            <Toggle socket={socket} id={"1"}/>
            <Toggle socket={socket} id={"2"}/>
        </Container>
    );
}

export default App
