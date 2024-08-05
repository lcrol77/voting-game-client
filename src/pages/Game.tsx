import { useEffect } from "react";
import { useState } from "react";
import { Socket } from "socket.io-client";
import { events, User } from "../App";
import Container from "../components/Layout/Container";
import { PlayerCard } from "../components/PlayerCard";

type Vote = {
    currentUser: User | null
    votedForUser: User | null
}

type GameState = {
    roundInProgress: boolean
    timeout: NodeJS.Timeout | null
    roundNumber: number
    timeRemaining: number
}

export default function Game({ socket, users, currentUser }: gameProps) {
    const [userVotedFor, setUserVotedFor] = useState<User>(null);
    const [gameState, setGameState] = useState<GameState>({
        roundInProgress: false,
        timeout: null,
        roundNumber: 0,
        timeRemaining: 0,
    });
    useEffect(() => {
        socket.on(events.gameState, (gameState: GameState) => {
            setGameState(gameState)
        });
    }, [])

    const handlePlayerCardClick = (user: User) => {
        setUserVotedFor(user);
        const vote: Vote = { currentUser: currentUser, votedForUser: user }
        socket.emit("vote", vote);
    }

    const onClick = () => {
        console.log("onClick")
        if (gameState.roundInProgress) {
            socket.emit("end")
            return
        }
        socket.emit("start")
    }

    return (<div>
        <Container>
            <h2 className="text-center p-4 text-xl">{gameState.roundInProgress?`time remaining ${gameState?.timeRemaining}`:""}</h2>
            <button onClick={onClick} type='button' className="bg-east-bay-400 rounded border-2 border-east-bay-600">{gameState.roundInProgress ? "End Round" : "Start Round"}</button>
                <>
                    <h2 className="text-center p-4 text-xl"></h2>
                    <ul role="list" className="divide-y divide-gray-100">
                        {users.map((user => <PlayerCard key={user!.id} totalUserCount={users.length} user={user} handleClick={handlePlayerCardClick} />))}
                    </ul>
                </>
        </Container>
    </div >
    )
}

type gameProps = {
    users: User[]
    socket: Socket
    currentUser: User
}
