import * as Koa from "koa";
import * as views from "koa-views";
import * as json from "koa-json";
import * as onerror from "koa-onerror";
import * as bodyparser from "koa-bodyparser";
import * as logger from "koa-logger";
import * as index from "./routes/index";
import * as users from "./routes/users";
import * as koa_static from "koa-static";

const app = new Koa();

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json({}));
app.use(logger());
app.use(koa_static("./public"));

app.use(
  views("./views", {
    extension: "ejs"
  })
);

// logger
app.use(async (ctx, next) => {
  const start: Date = new Date();
  await next();
  const end: Date = new Date();
  const ms: Date = new Date(start.getTime() - end.getTime());
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
