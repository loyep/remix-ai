import { db, schema } from "../server/db";
import { client } from "~/server/redis";

export async function loader() {
  const res = await db.select().from(schema.users);
  console.log(res);
  const redisRes = await client.get("foo");
  console.log(redisRes);
  return new Response("Hello Remix AI", {
    status: 200,
  });
}
