const mongoose = require('mongoose')
const Key = require('./configuration/env')()
export default {
    connect:()=>{
        return new Promise((resolve,reject)=>{
            mongoose.Promise = global.Promise
            mongoose.connect(Key.databaseAddress,{ useNewUrlParser: true },(err)=>{
                if(err){
                    reject(`⚠️  :Connected failed, please check your MongoDB at ${Key.databaseAddress}`)
                }else{
                    resolve(`🍟  :Successfully connected to MongoDB at ${Key.databaseAddress}`)
                }
            })
        })
    }
}