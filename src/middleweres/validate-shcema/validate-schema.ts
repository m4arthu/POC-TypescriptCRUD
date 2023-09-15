import { ObjectSchema } from "joi"
import { Request,Response,NextFunction } from "express"

export const validateSchema = (schema:ObjectSchema) =>{
    return (req:Request,res:Response,next:NextFunction) =>{
        const validation = schema.validate(req.body,{abortEarly:false});
        if(validation.error){
            res.status(422).send(validation.error.message)
        } else {
            next();
        }
    }
}