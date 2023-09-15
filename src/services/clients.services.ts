
import { CreateClient,Client } from "../protocols/protocols.ts";
import { clientRepository } from "../repositories/repositories.ts";
 async function getClientService(){
   const count  = await  clientRepository.countClients()
   const id  = Math.floor(Math.random()*(count)) + 1
   return await clientRepository.getClients(id)
}

async function postClientService(client:CreateClient){
   const clientExist = await clientRepository.getClientsByNameAndLastname(client)
   if(clientExist){
      throw {type:"Conflict",message:"Client already exists"}
   }
   await clientRepository.postClients(client)
}

async function updateClientService(client:Client) {
   const clientExist = await clientRepository.getClients(client.id)
   if(!clientExist) {
      throw {type:"NotFound", message:"Client not found"}
   }
   await clientRepository.updateClient(client)
}

async function deletClientService(id:number){
   const clientExist = await clientRepository.getClients(id)
   if(!clientExist) {
      throw {type:"NotFound", message:"Client not found"}
   }
   await clientRepository.deletClient(id)
}
export const clientServices = {
   getClientService,
   postClientService,
   updateClientService,
   deletClientService
}