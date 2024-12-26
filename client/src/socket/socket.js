import { io } from 'socket.io-client';

const URL = process.env.SERVER_URL ?? 'http://localhost:3001';

const socket = io(URL, { autoConnect: false });

export { socket };
