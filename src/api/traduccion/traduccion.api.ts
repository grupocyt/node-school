import express from 'express'
  
export async function HolaTraduccionFunction( req:express.Request, res:express.Response ) {
 
       const hola:string = "hello";

    return res.status(200).send( hola  ) 
} 
export async function comoestasTraduccionFunction( req:express.Request, res:express.Response ) {
 
       const comoestas:string = "how are you";

    return res.status(200).send( comoestas  ) 
} 

export async function queedadtienesTraduccionFunction( req:express.Request, res:express.Response ) {
 
       const queedadtienes:string = "how old you";

    return res.status(200).send( queedadtienes  ) 

} 
export async function estaslocoTraduccionFunction( req:express.Request, res:express.Response ) {
 
       const estasloco:string = "you are crazy";

    return res.status(200).send( estasloco ) 
} 