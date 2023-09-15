import express, {Request,Response,NextFunction,ErrorRequestHandler,json} from "express"
import  "express-async-errors" 
import { router } from "./routes/router.ts" 
import { ErrorHandler } from "./protocols/protocols.ts"
import httpStatus from "http-status"
const app = express()

app.use(json())
app.use(router)
app.use((err:ErrorHandler,req:Request,res:Response,next:NextFunction)=>{
    if(err.type === "Conflict"){
        return res.status(httpStatus.CONFLICT).send(err.message)
    }
    if(err.type === "NotFound"){
        return res.status(httpStatus.NOT_FOUND).send(err.message)
    }
    console.log(err)
    res.status(500).send("someting is worong cantact the developer :(")
})
app.listen(5000,()=>{
    console.log(`------servidor rodando na  porta 5000`)
})