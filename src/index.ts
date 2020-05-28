import express from "express";
import { defaultOutput, resourceLoader } from "./portals/api";

const app: express.Application = express();
const port: number = 3000;

app.get("/", defaultOutput);
app.get("/:resource", resourceLoader);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
