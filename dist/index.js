"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const json = require("koa-json");
const app = new Koa();
const router = new Router();
router.get("/", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = { msg: "Vem q TEM!" };
    yield next();
}));
app.use(json());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log("koa tá voando!!!");
});
