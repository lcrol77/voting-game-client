import { Dispatch, SetStateAction } from "react"
import { User } from "../App"

export default function Enter(props: EnterProps) {
    const userToBeSet = {
        name: "Logan Croley",
        id: "1",
    };

    return (
        <div><button onClick={() => props.setCurrentUser(userToBeSet)} className="bg-blue-500 text-white px-4 py-2 rounded border-2 border-blue-700 shadow-md">Set State</button></div>
    )
}

type EnterProps = {
    currentUser: User,
    setCurrentUser: Dispatch<SetStateAction<User>>,
}
