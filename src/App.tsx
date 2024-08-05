import socket from "./utils/sockets/socket";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Game from "./pages/Game";
import Enter from "./pages/Enter";

export type User = {
    name: string,
    id: string,
    socketId: string | null
    currentVote: string | null,
    previousVote: string | null,
    numberOfVotes: number,
} | null;

export const events = {
    connection: "connection",
    setToggle: "setToggle",
    userJoined: "userJoined",
    updateUsers: "updateUsers",
    disconnect: "disconnect",
    gameState: "gameInfo",
}


function App() {
    const [currentUser, setCurrentUser] = useState<User>(null);
    const [users, setCurrentUsers] = useState<User[]>([]);

    const nav = useNavigate();

    useEffect(() => {
        if (currentUser != null) {
            nav("/game")
            socket.emit(events.userJoined, currentUser);
        } else if (currentUser == null) {
            const userId = localStorage.getItem("userId");
            if (userId != null) {
                socket.emit("reconnect", userId);
            } else {
                nav("/")
            }
        }
    }, [currentUser, nav])

    useEffect(() => {
        socket.on(events.updateUsers, (newUsers: User[]) => {
            setCurrentUsers(newUsers);
        });

        socket.on("reconnect", (user: User) => {
            if (user != null) {
                setCurrentUser(user)
                localStorage.setItem("userId", user.id);
                nav("/game");
            }
            else{
                localStorage.removeItem("userId");
                nav("/");
            }
        })
    }, [])

    const routes = <Routes>
        <Route
            path="/"
            element={
                <Enter currentUser={currentUser} setCurrentUser={setCurrentUser} />
            }
        />
        <Route
            path="/game"
            element={
                <Game users={users} socket={socket} currentUser={currentUser} />
            }
        />
    </Routes>

    return (
        <div>
            {routes}
        </div>
    )
}

export default App;
