import { Socket } from "socket.io-client";
import Container from "../components/Layout/Container";
import Toggle from "../components/Toggle";

export default function Game({ socket }: gameProps) {
    return (
        <Container>
            <Toggle socket={socket} id={"1"} />
            <Toggle socket={socket} id={"2"} />
        </Container>
    )
}

type gameProps = {
    socket: Socket
}
