const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const userRoutes = require('./routes/userRoutes');

const app = new Koa();

// 使用中间件
app.use(cors());
app.use(bodyParser());

// 使用路由
app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});