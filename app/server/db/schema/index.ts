import * as schemas from './pgsql'

export { schemas }

export type User = typeof schemas.users.$inferSelect;
export type Balance = typeof schemas.balances.$inferInsert;
export type App = typeof schemas.apps.$inferInsert;
export type OpenAiChatLog = typeof schemas.openAiChatLogs.$inferInsert;

export type Schema = {
  User: User;
  Balance: Balance;
  App: App;
  OpenAiChatLog: OpenAiChatLog;
};