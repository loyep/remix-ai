import { db, schema } from "../server/db";
import { client } from "~/server/redis";

export async function loader() {
  const res = await db.select().from(schema.users);
  console.log(res);
  const value = await client.get('key');
  console.log(value);
  // const redisRes = await client.hGetAll('test');
  // console.log(redisRes);
  return new Response("Hello Remix AI", {
    status: 200,
  });
}
