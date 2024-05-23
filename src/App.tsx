import socket from "./utils/sockets/socket";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Game from "./pages/Game";
import Enter from "./pages/Enter";

export type User = {
    name: string,
    id: string
} | null;

function App() {
    const [currentUser, setCurrentUser] = useState<User>(null);
    const nav = useNavigate();

    useEffect(()=>{
        if(currentUser != null) {
            nav("/game")
        }
    }, [currentUser])

    useEffect(()=>{
        if(currentUser == null) {
            nav("/")
        }
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
                <Game socket={socket} />
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
