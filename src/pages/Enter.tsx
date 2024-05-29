import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { User } from "../App"

export default function Enter(props: EnterProps) {
    const { setCurrentUser } = props;

    const [currentUserInput, setCurrentUserInput] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentUserInput(event.target.value);
    }

    const onSubmit = () => {
        // TODO: need to add validation
        const userToSave: User = {
            name: currentUserInput,
            socketId: null, id: uuidv4(),
            numberOfVotes: 0,
            currentVote: null,
            previousVote: null
        }
        setCurrentUser(userToSave)
    }

    return (
        <div className="bg-east-bay-400 space-y-4 flex flex-col items-center justify-center h-screen">
            <div className='mx-5'>
                <h1 className="text-center">Voting Game</h1>
                <div className="mx-auto w-52 md:w-96 space-y-4 rounded-md border-2 border-east-bay-600 bg-white p-4 shadow-lg flex flex-col">
                    <div className="mt-2">
                        <input value={currentUserInput} onChange={handleChange} className="placeholder: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-east-bay-600 sm:text-sm sm:leading-6"
                            placeholder="Your name here" type="text" />
                    </div>
                    <button onClick={onSubmit} type='button' className="bg-east-bay-400 rounded border-2 border-east-bay-600">Enter</button>
                </div>
            </div>
        </div>
    )
}

type EnterProps = {
    currentUser: User,
    setCurrentUser: Dispatch<SetStateAction<User>>,
}
