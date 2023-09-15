import Joi from "joi"
import { CreateClient,Client } from "../protocols/protocols.ts"

const personSchema = Joi.object<CreateClient>({
 firstName: Joi.string().required().min(2).max(50),
 lastName: Joi.string().required().min(2).max(50),
})

const updatePersonSchema = Joi.object<Client>({
    id:Joi.number().integer().positive().required(),
    firstName: Joi.string().required().min(2).max(50),
    lastName: Joi.string().required().min(2).max(50),
   })

export const schemas = {
    personSchema,
    updatePersonSchema
}