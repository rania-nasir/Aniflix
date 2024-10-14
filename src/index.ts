import express, { Express, Request, Response } from "express";
const dotenv = require('dotenv')
import { AppDataSource } from "./config/data-source";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Node - Express JS - TypeScript');
})

// Initialize the database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    // Start the server only after the database connection is successful
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
  });