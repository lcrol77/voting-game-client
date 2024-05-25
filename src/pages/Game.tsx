import { Socket } from "socket.io-client";
import { User } from "../App";
import Container from "../components/Layout/Container";
import Toggle from "../components/Toggle";

export default function Game({ socket, users }: gameProps) {


        console.log(users);
    return (<div>
        <Container>
            {users.map((user) => <p>{user?.name}, {user?.id}</p>)}
            <Toggle socket={socket} id={"1"} />
            <Toggle socket={socket} id={"2"} />
        </Container>
    </div>
    )
}

type gameProps = {
    users: User[]
    socket: Socket
}
