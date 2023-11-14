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
    getData()

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
                res.send(result.rows[params[1]])
        })

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