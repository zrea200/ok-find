const Koa = require('koa');
const app = new Koa();

// 定义一个中间件，处理所有请求
app.use(async (ctx) => {
    ctx.body = 'Hello, Koa Backend!';
});

// 启动服务器，监听 3000 端口
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});