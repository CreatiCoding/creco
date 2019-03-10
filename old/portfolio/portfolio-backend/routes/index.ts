import * as Router from "koa-router";

const router: Router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = true;
});

router.get("/str", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json@!#$%T"
  };
});

module.exports = router;
