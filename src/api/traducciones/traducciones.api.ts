import express from 'express'
  
export async function HolaTraduccionFunction( req:express.Request, res:express.Response ) {
 
       const hola:string = "hello";

    return res.status(200).send(hola) 
} 