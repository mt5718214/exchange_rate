const Koa = require('koa')
const router = require("./route")

const app = new Koa()
const PORT = 3000

// Routes
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => console.log(`--- Backend server start to listen ${PORT} ---`))