import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { schemas } from "./schema";

export const schema = { ...schemas };

export * from "drizzle-orm";

export const db = drizzle(postgres(process.env.DATABASE_URL!), { schema });
