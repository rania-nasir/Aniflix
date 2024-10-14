import "reflect-metadata"
const dotenv = require('dotenv')
import { DataSource } from "typeorm"
import { Users } from "../entity/Users";
import { Roles } from "../entity/Roles";
import { Animes } from "../entity/Animes";


dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "aniflix",
    synchronize: true,
    logging: false,
    entities: [Users, Roles, Animes]
})