import { io, Socket } from "socket.io-client";

const URL = `http://${process.env.REACT_APP_WSS_IP}:8080`;
const socket: Socket = io(URL);

export default socket;

