import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "../.env" });

const app: Express = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
const apiKey = process.env.API_KEY;

app.get("/api/apiKey", (req: Request, res: Response) => {
  // res.send({ apiKey: apiKey });
  res.send({ apiKey: `server is connected!` });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
