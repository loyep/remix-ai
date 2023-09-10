// import { createClient } from "redis";
import { kv } from "@vercel/kv";

// console.log("REDIS_URL", process.env.REDIS_URL);
// const client = createClient({
//   url: process.env.REDIS_URL || process.env.KV_URL,
// });

export { kv as client };
