export type Client = {
      id: number
      firstName: string,
      lastName: string,
      length: number
    
}

export type CreateClient = Omit<Client,"id">

export type ClientCount = {
    countPeople: number
}

export type ErrorHandler = {
    type: string,
    message: string
}