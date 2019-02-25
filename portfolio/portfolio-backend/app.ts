import * as Koa from "koa";
import * as views from "koa-views";
import * as json from "koa-json";
import * as bodyparser from "koa-bodyparser";
import * as logger from "koa-logger";

const app: Koa = new Koa();

const onerror = require("koa-onerror");

const index = require("./routes/index");
const users = require("./routes/users");

console.log(true);
// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "ejs"
  })
);

// logger
app.use(async (ctx, next) => {
  const start: number = new Date().getTime();
  await next();
  const ms: number = new Date().getTime() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes());
app.use(index.allowedMethods());
app.use(users.routes());
app.use(users.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
