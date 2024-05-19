import path from "path";
import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

// URL de conexión a la base de datos MySQL
const databaseUrl = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// Opciones adicionales para Sequelize
const sequelizeOptions = {
  // Opciones adicionales aquí
  logging: true,
};

// Crear una nueva instancia de Sequelize utilizando la URL y las opciones
const sequelizeMysqlConnection = new Sequelize(databaseUrl, sequelizeOptions);

// Asociar automáticamente modelos usando archivos en la ruta 'src/models'
sequelizeMysqlConnection.addModels([
  path.join(__dirname, "../models/**/*.model.{ts,js}"),
]);

// Si necesitas personalizar la asociación de modelos, puedes usar modelMatch como lo estabas haciendo antes
sequelizeMysqlConnection.addHook("beforeDefine", (attributes, options: any) => {
  options.modelMatch = (filename: any, member: any) => {
    return (
      filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
    );
  };
});

export default sequelizeMysqlConnection;
