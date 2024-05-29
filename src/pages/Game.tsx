import { useEffect } from "react";
import { useState } from "react";
import { Socket } from "socket.io-client";
import { User } from "../App";
import Container from "../components/Layout/Container";
import { PlayerCard } from "../components/PlayerCard";

type Vote = {
    currentUser: User | null
    votedForUser: User | null
}

export default function Game({ socket, users, currentUser }: gameProps) {
    const [userVotedFor, setUserVotedFor] = useState<User>(null);
    const handlePlayerCardClick = (user: User) => {
        setUserVotedFor(user);
        const vote: Vote = { currentUser: currentUser, votedForUser: user }
        socket.emit("vote", vote);
    }
    return (<div>
        <Container>
            <h2 className="text-center p-4 text-xl">who is most likely to climb mount everest and then eat a taco at the top while taking a selfie?</h2>
            <ul role="list" className="divide-y divide-gray-100">
                {users.map((user => <PlayerCard key={user!.id} totalUserCount={users.length} user={user} handleClick={handlePlayerCardClick} />))}
            </ul>
        </Container>
    </div>
    )
}

type gameProps = {
    users: User[]
    socket: Socket
    currentUser: User
}
