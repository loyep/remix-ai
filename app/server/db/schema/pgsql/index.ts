import { pgTable, serial, text, varchar, date } from 'drizzle-orm/pg-core';

export const users = pgTable('User', {
  id: serial('id').primaryKey(),
  email: text('email').unique(),
  name: varchar('name', { length: 256 }),
  password: varchar('password', { length: 256 }),
  createdAt: date('createdAt').defaultNow(),
  updatedAt: date('updatedAt').defaultNow(),
  deletedAt: date('deletedAt'),
});

export const apps = pgTable('App', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  apiKey: varchar('apiKey', { length: 256 }).unique(),
  createdAt: date('createdAt').defaultNow(),
  updatedAt: date('updatedAt').defaultNow(),
  deletedAt: date('deletedAt'),
});

export const balances = pgTable('Balance', {
  id: serial('id').primaryKey(),
  userId: varchar('userId', { length: 256 }).unique(),
  amount: varchar('amount', { length: 256 }),
  createdAt: date('createdAt').defaultNow(),
  updatedAt: date('updatedAt').defaultNow(),
  deletedAt: date('deletedAt'),
});

export const openAiChatLogs = pgTable('OpenAiChatLog', {
  id: serial('id').primaryKey(),
  message: varchar('message', { length: 256 }),
  response: varchar('response', { length: 256 }),
  createdAt: date('createdAt').defaultNow(),
  updatedAt: date('updatedAt').defaultNow(),
  deletedAt: date('deletedAt'),
});

