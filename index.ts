import { config } from "dotenv";
import { TwitterApi } from "twitter-api-v2";
import env from "env-var";

config();

const TWITTER_API_KEY = env.get("TWITTER_API_KEY").required().asString();

const twitterClient = new TwitterApi(TWITTER_API_KEY);

const readOnlyClient = twitterClient.readOnly;

const user = await readOnlyClient.v2.userByUsername("0xElliptic");

console.log(user);
// await twitterClient.v2.tweet("Hello, this is a test.");
