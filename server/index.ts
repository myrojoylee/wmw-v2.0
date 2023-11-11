import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config({ path: "../.env" });

const app: Express = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
const apiKey = process.env.API_KEY;
console.log(
  `if the server doc is being read, you'll see an api key here >> : ${apiKey}`
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/dist")));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
  });
}

app.get("/api/apiKey", (req: Request, res: Response) => {
  res.send({ apiKey: apiKey });
  console.log(apiKey);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
