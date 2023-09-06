import axios from "axios";
import { IEvent, ICommit } from "./intefaces";
import moment from "moment-timezone";
import dotenv from "dotenv";
dotenv.config();
const getTodaysCommits = (commits: ICommit[]) => {
  const today = moment().tz("Etc/GMT+2").format("YYYY-MM-DD");

  const todayCommits = commits.filter((commit) => {
    const commitDate = moment(commit.created_at)
      .tz("Etc/GMT+2")
      .format("YYYY-MM-DD");
    return commitDate === today;
  });

  return todayCommits.length;
};

const fetchGithubCommitsFromAllRepos = async () => {
  try {
    const username = "biplo12";
    const url = `https://api.github.com/users/${username}/events/public`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });
    const data = response.data;
    const commits = data.filter((event: IEvent) => event.type === "PushEvent");
    console.log({ commits });
    const todaysCommits = getTodaysCommits(commits);
    console.log({ todaysCommits });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchGithubCommitsFromAllRepos();
