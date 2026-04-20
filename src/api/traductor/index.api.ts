import express from 'express'
import { Traductor } from '../../controllers/traductor/index.controller'
  
export async function HolaFunction( req:express.Request, res:express.Response ) {
 
    const respuesta = await new Traductor().hola();

    return res.status(200).send( respuesta  ) 
} 