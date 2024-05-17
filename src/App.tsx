import { useState } from "react";
import Container from "./components/Layout/Container";
import Toggle from "./components/Toggle";

function App() {
	const [enabled1, setEnabled1] = useState(false);;
	const [enabled2, setEnabled2] = useState(false);;
	const [enabled3, setEnabled3] = useState(false);;

	return (
		<Container>
			<Toggle enabled={enabled1} setEnabled={setEnabled1}/>
			<Toggle enabled={enabled2} setEnabled={setEnabled2}/>
			<Toggle enabled={enabled3} setEnabled={setEnabled3}/>
		</Container>
	);
}

export default App;
