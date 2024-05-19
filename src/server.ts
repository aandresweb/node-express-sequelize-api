import express, { Application, RequestHandler, Router, json } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.config();
  }

  public run(callback: Function = () => {}): void {
    this.app.listen(port as number, "0.0.0.0", () => {
      console.log("Server running on port: " + port);
      callback();
    });
  }

  private config(): void {
    this.app.use(json());
    this.app.use(cors());
  }

  private middlewares(): void {}

  public addRoutes(
    endpoint: string,
    router: Router,
    middleware: RequestHandler | null = null
  ) {
    if (middleware) {
      return this.app.use(endpoint, middleware, router);
    }
    this.app.use(endpoint, router);
  }
}

export default Server;
