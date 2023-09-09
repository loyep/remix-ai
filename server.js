const path = require("node:path");

const { broadcastDevReady } = require("@remix-run/node");
const express = require("express")

const BUILD_DIR = path.resolve(__dirname, "build");
const build = require(BUILD_DIR);

const app = express();

// ... code for setting up your express app goes here ...

app.all(
  "*",
  build.createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  })
);

const port = 3000;
app.listen(port, () => {
  console.log(`👉 http://localhost:${port}`);

  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
});