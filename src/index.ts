import sequelizeMysqlConnection from "./db/sequelize-mysql";
import { healthcheckRoutes } from "./routes";
import Server from "./server";

const server = new Server();

server.run(async () => {
  try {
    await sequelizeMysqlConnection.authenticate();
    console.log("Database is connected using Sequelized 🚀");
  } catch (error) {
    console.log("Database connection has an error 🚩", error);
  }
});

server.addRoutes("/api/healthcheck", healthcheckRoutes);
