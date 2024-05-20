import { useEffect, useState, } from 'react'
import { Switch } from '@headlessui/react'
import { Socket } from 'socket.io-client'
import { setToggle } from '../utils/sockets/types';

function classNames(...classes: [string, string]) {
    return classes.filter(Boolean).join(' ')
}

export default function Toggle(props: ToggleProps) {
    const [enabled, setEnabled] = useState<boolean>(false);

    const { socket, id } = props;

    useEffect(() => {
        socket.on('setToggle', (message: setToggle) => {
            if (message.id === id) {
                setEnabled(message.isSet);
            }
        });

        // Clean up the socket connection when the component unmounts
        return () => {
            socket.off('setToggle');
        };
    }, [])

    const handleChange = (newStatus: boolean) => {
        const message: setToggle = {
            isSet: newStatus,
            id: props.id,
        }
        setEnabled(newStatus);
        socket.emit("setToggle", message);
    }

    return (
        <Switch
            checked={enabled}
            onChange={handleChange}
            className={classNames(
                enabled ? 'bg-indigo-600' : 'bg-gray-200',
                'relative mt-10 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
            />
        </Switch>
    )
}

type ToggleProps = {
    socket: Socket
    id: string
}
