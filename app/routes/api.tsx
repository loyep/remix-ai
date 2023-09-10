import { db, schema } from "../server/db";

export async function loader() {
  const res = await db.select().from(schema.users);
  console.log(res);
  return new Response("Hello Remix AI", {
    status: 200,
  });
}
