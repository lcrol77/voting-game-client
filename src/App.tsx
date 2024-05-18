import { useState, useEffect } from "react";
import Container from "./components/Layout/Container";
import Toggle from "./components/Toggle";
import socket from "./utils/sockets/socket";

type setToggle = {
	isSet: boolean,
	toggle: number
}

function App() {
	const [enabled1, setEnabled1] = useState(false);;
	const [enabled2, setEnabled2] = useState(false);;
	const [enabled3, setEnabled3] = useState(false);;

	useEffect(() => {
		socket.on('setToggle', (message: setToggle) => {
			console.log(message);
			switch (message.toggle) {
				case 1:
					setEnabled1(message.isSet);
					break;
				case 2:
					setEnabled2(message.isSet);
					break;
				case 3:
					setEnabled3(message.isSet);
					break;
			}
		});

		// Clean up the socket connection when the component unmounts
		return () => {
			socket.off('setToggle');
		};
	}, [])

	const onChange1 = () => {
		const message: setToggle = {
			isSet: !enabled1,
			toggle: 1
		}
		setEnabled1(!enabled1);
		socket.emit("setToggle",message);
	}
	const onChange2= () => {

		const message: setToggle = {
			isSet: !enabled2,
			toggle: 2
		}
		setEnabled2(!enabled2);
		socket.emit("setToggle",message);
	}
	const onChange3 = () => {

		const message: setToggle = {
			isSet: !enabled3,
			toggle: 3
		}
		setEnabled3(!enabled3);
		socket.emit("setToggle",message);
	}

	return (
		<Container>
			<Toggle enabled={enabled1} setEnabled={onChange1} />
			<Toggle enabled={enabled2} setEnabled={onChange2} />
			<Toggle enabled={enabled3} setEnabled={onChange3} />
		</Container>
	);
}

export default App;
