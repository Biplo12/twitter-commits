import sendTweet from "./sendTweet";
import githubCommits from "./githubCommits";
import cronJob from "cron";

const tweetCommits = async () => {
  const commits = await githubCommits();
  await sendTweet(commits);
};

const job = new cronJob.CronJob("0 0 0 * * *", tweetCommits);

console.log("Starting cron job...");
job.start();
