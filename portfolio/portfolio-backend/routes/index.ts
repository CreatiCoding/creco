import * as Router from "koa-router";

const router = Router();

router.get("/", async (ctx: any, next: Function) => {
  await ctx.render("index", {
    title: "Hello Koa 2!"
  });
});

router.get("/string", async (ctx: any, next: Function) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx: any, next: Function) => {
  ctx.body = {
    title: "koa2 json"
  };
});
console.log(router);
module.exports = router;
