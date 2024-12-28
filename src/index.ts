import express, { Application, Request, Response } from "express";
import { json } from "body-parser";
import { GitHubWebhookPayload } from "./types/github";

const app: Application = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(json());
app.get("/", (req: Request, res: Response) => {
  res.send("You are using ai code review");
});
app.get("/test", (req: Request, res: Response) => {
  console.log("test endpoint hitting");
  res.send("Hello World");
});

app.post("/github-webhook", async (req, res) => {
  const event = req.headers["x-github-event"];
  console.log("event", event);
  if (event === "pull_request") {
    const pullRequest =
      req.body.action === "opened" ? req.body.pull_request : null;
    if (pullRequest) {
      console.log("New Pull Request Received:", pullRequest);
      // await analyzePullRequest(pullRequest);
    }
  }

  res.status(200).json({ message: "Pull request received" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
