import { db, schema } from "../server/db";
import { client } from "~/server/redis";

export async function loader() {
  const res = await db.select().from(schema.users);
  console.log(res);
  await client.connect();
  client.on('error', err => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('key', 'value');
  const value = await client.get('key');
  await client.disconnect();
  console.log(value);
  // const redisRes = await client.hGetAll('test');
  // console.log(redisRes);
  return new Response("Hello Remix AI", {
    status: 200,
  });
}
