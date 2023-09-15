import { validateSchema } from "../middleweres/validate-shcema/validate-schema.ts"
import { clientControllers} from "../controllers/client.controller.ts"
import  express from "express"
import { schemas } from "../schemas/schemas.ts"
const app = express()

app.get("/person",clientControllers.getClient)
app.post("/person",validateSchema(schemas.personSchema),clientControllers.postClient)
app.put("/person",validateSchema(schemas.updatePersonSchema),clientControllers.updateClient)
app.delete("/person/:id",clientControllers.deleteClient)
export const router = app
