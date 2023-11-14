'use strict'
// imported packages
import express from 'express'
import cors from 'cors'
import pg from 'pg'

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const init=()=>{
    app.use((req,res,next)=>{
        console.log(req.method, req.body, req.url)
        next()
    })
    getData()
    postData()
    patchData()

    app.use(express.static('public'))
    app.listen(port,()=>{console.log(`listening on ${port}`)})
}

const getData=()=>{
    app.get(/^\/(.*)\/(.*)$/,(req,res)=>{
        const queryString = `select * from ${req.params[0]}`
        pool.query(queryString)
        .then(result=>{
            req.params[1]==='*'?
                res.send(result.rows):
                res.send(result.rows[req.params[1]-1])
        })

    })
}

const postData=()=>{
    app.post(/^\/(.*)$/,(req,res)=>{
        let queryString = ''
        req.params[0]==='instructors'?
            queryString = `insert into ${req.params[0]} (name,age,subject) values ('${req.body.reqName}',${req.body.reqAge},'${req.body.reqSubject}') returning *`:
            queryString = `insert into ${req.params[0]} (name,age,instructor_id) values ('${req.body.reqName}',${req.body.reqAge},${req.body.reqfKey}) returning *`
        pool.query(queryString)
        .then(result=>{
            console.log(result.rows)
            res.send(result.rows)
        })
    })
}

const patchData=()=>{
    app.patch(/^\/(.*)\/(.*)$/,(req,res)=>{
        for(let property in req.body){
            console.log(req.params[0])
            const newProp = property.slice(3).toLowerCase()
            const queryString = `update ${req.params[0]} set ${newProp}='${req.body[property]}' where id=${req.params[1]}`
            if(req.body[property]!==''){
                pool.query(queryString)
            }
        }
        const queryString = `select * from ${req.params[0]} where id=${req.params[1]}`
        pool.query(queryString)
        .then(result=>res.send(result.rows))
    })
}

const newPool=()=>{
    const pool = new pg.Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'null',
        port: 5432
    })
    return pool
}

const pool = newPool()
init()