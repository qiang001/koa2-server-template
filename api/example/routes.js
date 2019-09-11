// 路由接口
const Router = require('koa-router')
const router = new Router({prefix:'/examples'}) // 业务一级路由用复数
const Controllers = require('./controllers')

router.get('/sayHello',Controllers.sayHello)

module.exports = router