import { TwitterApi } from "twitter-api-v2";
import twitterClient from "./twitterClient";

const sendTweet = async (commits: number) => {
  const text = `I have made ${commits} commits in the last 24 hours!`;
  await twitterClient.v2.tweet(text);
  console.log(`Tweeted: ${text}`);
};

export default sendTweet;
