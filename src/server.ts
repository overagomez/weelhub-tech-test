import cors from "cors";
import express, { type Express } from "express";
import { registerRoutes } from "./infra/http/routes/index.js";


type DomainCache = {
	allowed: boolean;
	timestamp: number;
};

export class Server {
	private app: Express;
	private readonly CACHE_TTL = 5 * 60 * 1000;

	constructor(private readonly port: number) {
		this.app = express();
		this.loadMiddlewares();
		this.loadRoutes();
	}

	private isCacheValid(cached: DomainCache): boolean {
		return Date.now() - cached.timestamp < this.CACHE_TTL;
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
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}
}