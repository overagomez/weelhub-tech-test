import "dotenv/config";
import { Server } from "./server.js";
const port = Number(process.env.PORT) || 4100;
const server = new Server(port);
server.start();
