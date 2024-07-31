import { io, Socket } from "socket.io-client";

//const URL = "http://192.168.0.186:8080";
const URL = "http://192.168.0.159:8080";
const socket: Socket = io(URL);

export default socket;

