const Koa = require('koa')
const Key = require('./configuration/env')()
const db = require('./db/index')
const MidConfig = require('./middleware/mid-config')
const registerRouter  = require('./api/index')

//Http Server Start
const app = new Koa()
const port = Key.port
serverStart(app,port)

async function serverStart(app,port){
    try {
       let res =  await db.connect()
       console.log(res)
       app.use(MidConfig())
       app.use(registerRouter())
       app.listen(port, () => console.log(`👻  :Server is now listening for the requests at port: ${port} `))
    }catch (err){
        console.log(err)
    }

}