import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config({ path: "../.env" });

const app: Express = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
const apiKey = "021e75b0e3380e236b4ff6031ae2dde4";
// console.log("where is my api key ?");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/dist")));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
  });

  app.get("/api/apiKey", (req: Request, res: Response) => {
    res.send({ apiKey: apiKey });
    console.log(apiKey);
  });
}

app.get("/api/apiKey", (req: Request, res: Response) => {
  res.send({ apiKey: apiKey });
  console.log(apiKey);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
