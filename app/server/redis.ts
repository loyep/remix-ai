import { createClient } from "redis";

console.log("REDIS_URL", process.env.REDIS_URL);
const client = createClient({
  url: process.env.REDIS_URL || process.env.KV_URL,
});

client.connect();

export { client };
