
import { Request,Response } from "express";
import { clientServices } from "../services/clients.services";
import httpStatus from "http-status";

async function getClient(req:Request,res:Response){
  const client = await clientServices.getClientService()
  res.send(client)
}
async function postClient(req:Request,res:Response){
  await clientServices.postClientService(req.body)
  res.sendStatus(httpStatus.CREATED)
}
async function updateClient(req:Request,res:Response){
  await clientServices.updateClientService(req.body)
  res.sendStatus(httpStatus.OK)
}
async function deleteClient(req:Request,res:Response){
  const id = Number(req.params.id)
  if(isNaN(id)){
    return res.sendStatus(httpStatus.BAD_REQUEST)
  }
  await clientServices.deletClientService(id)
  res.sendStatus(httpStatus.OK)
}

export const clientControllers = {
  getClient,
  postClient,
  updateClient,
  deleteClient
}


