import express from 'express'
import { validationResult } from "express-validator"
 

export async function HolaFunction( req:express.Request, res:express.Response ) {
 
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) 
      return res.status(400).send(errors.array())  

    const {  body }  = req
      
    return res.status(200).send(  body ) 
}