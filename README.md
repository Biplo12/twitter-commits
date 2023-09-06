# Twitter Commit Script Documentation

## Introduction

The Twitter Commit Script is a Node.js application written in TypeScript that automates the process of tweeting your daily GitHub commits to a Twitter account. It uses the `twitter-api-v2` library to interact with the Twitter API and the `cron` library for scheduling daily tweets.

## Prerequisites

Before you can use the Twitter Commit Script, you need to have the following prerequisites in place:

1. Node.js and Yarn installed on your computer.
2. A GitHub token with read access to your repositories.
3. Twitter developer credentials for the Twitter API:
   - Twitter Access Token
   - Twitter Access Token Secret
   - Twitter API Key
   - Twitter API Secret

## Getting Started with Yarn

Follow these steps to set up and use the Twitter Commit Script with Yarn:

1. Clone the `twitter-commit` repository from GitHub:

   ```bash
   git clone https://github.com/your-username/twitter-commit.git
   ```

2. Change into the project directory:

   ```bash
   cd twitter-commit
   ```

3. Install the project dependencies using Yarn:

   ```bash
   yarn install
   ```

4. Create a `.env` file in the project root directory based on the provided `env.example`. Fill in your GitHub token and Twitter API credentials:

   ```env
   GITHUB_TOKEN=your_github_token
   TWITTER_ACCESS_TOKEN=your_twitter_access_token
   TWITTER_ACCESS_TOKEN_SECRET=your_twitter_access_token_secret
   TWITTER_API_KEY=your_twitter_api_key
   TWITTER_API_SECRET=your_twitter_api_secret
   ```

5. Configure your GitHub username in the `config.ts` file:

   ```typescript
   // config.ts
   export const GITHUB_USERNAME = "biplo12"; // Your GitHub username
   ```

6. Start the script by running the following command with Yarn:

   ```bash
   yarn start
   ```

## Scheduling Tweets at 12:00 AM

To schedule the script to run every day at 12:00 AM, you can update the `CronJob` variable in `index.ts` as follows:

```typescript
// index.ts
const job = new cronJob.CronJob("0 0 0 * * *", tweetCommits);
```

With this schedule, the script will execute daily at midnight (12:00 AM) to fetch your GitHub commits for the current day and post them as a tweet to the specified Twitter account.

Remember to keep your computer running at the scheduled time for the script to execute automatically.

## Customization

You can still customize the script as mentioned in the previous documentation to adjust the content and format of the tweets and explore additional features provided by the `twitter-api-v2` library.

## Troubleshooting

If you have any questions or encounter any issues while setting up or using the Twitter Commit Script, please refer to the GitHub repository's issue tracker for help or submit your own issue.

## Conclusion

With the Twitter Commit Script, you can automate the process of tweeting your daily GitHub commits to your Twitter account. This can help you keep track of your coding progress and share it with your followers effortlessly. Happy tweeting!
