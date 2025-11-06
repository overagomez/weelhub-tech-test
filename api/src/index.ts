import "dotenv/config";
import { Server } from "./server.js";

try {
	const server = new Server(Number(process.env.PORT) || 3000);
	server.start();
} catch (error) {
	console.error(error);
	process.exit(1);
}