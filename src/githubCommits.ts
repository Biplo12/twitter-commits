import axios from "axios";
import dotenv from "dotenv";
import { ICommit, IEvent } from "./intefaces";
import { GITHUB_USERNAME } from "../config";
dotenv.config();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const githubCommits = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${GITHUB_USERNAME}/events`,
    {
      headers: {
        Authorization: `Token ${GITHUB_TOKEN}`,
      },
    }
  );
  const events: IEvent[] = data;
  const commits: ICommit[] = [];

  events.forEach((event) => {
    if (event.type === "PushEvent") {
      const { created_at, payload } = event;
      const timestamp = created_at;
      const today = new Date().getTime();

      if (today - new Date(timestamp).getTime() > 24 * 60 * 60 * 1000) return;

      const { commits: eventCommits } = payload;

      eventCommits.forEach((eventCommit) => {
        const { message, url } = eventCommit;
        commits.push({
          message,
          timestamp,
          url,
        });
      });
    }
  });
  return commits.length;
};

export default githubCommits;
