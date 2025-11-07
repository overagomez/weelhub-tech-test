import express, { type Express } from "express";
import { registerRoutes } from "./infra/http/routes/index.js";
import cors from "cors";

export class Server {
	private app: Express;
	private readonly CACHE_TTL = 5 * 60 * 1000;

	constructor(private readonly port: number) {
		this.app = express();
		this.loadMiddlewares();
		this.loadRoutes();
	}

	start() {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}

	loadRoutes() {
		registerRoutes(this.app);
	}

	loadMiddlewares() {
		
		this.app.use(cors({
  			origin: "*", // or "http://localhost:3001" if you want to restrict it
  			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  			allowedHeaders: ["Content-Type"],
		}));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}
}