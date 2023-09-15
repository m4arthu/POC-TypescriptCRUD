import {db} from "../databaseconnection/database.connection.ts"
import { Client, ClientCount, CreateClient } from "../protocols/protocols.ts"

async function countClients(){
    return (await db.query<ClientCount>(`select count(id) as "countPeople" from people`)).rows[0].countPeople
}

async function getClients(id:number){
    return (await db.query<Client>(`select * from people where id = $1`,[id])).rows[0]
}

async function postClients(client:CreateClient){
    await db.query(`INSERT INTO people("firstName", "lastName") values($1,$2)`,[client.firstName,client.lastName])
}

async function getClientsByNameAndLastname(client:CreateClient){
    return (await db.query<Client>(`select * from people where "firstName" = $1 AND "lastName" = $2`,[client.firstName,client.lastName])).rows[0]
}

async function updateClient(client:Client){
    return (await db.query<Client>(`UPDATE people SET "firstName" = $1,"lastName" = $2  where id = $3 `,[client.firstName,client.lastName,client.id])).rows[0]
}

async function  deletClient(id:number) { 
    await db.query(`DELETE FROM people WHERE id =$1`,[id])
}

export const  clientRepository = {
    countClients,
    getClients,
    postClients,
    getClientsByNameAndLastname,
    updateClient,
    deletClient

}