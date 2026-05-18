import express from 'express'
  
export async function SumaFunction( req:express.Request, res:express.Response ) {
 
       const suma:number = 2+2;
  
    return res.status(200).send( String(suma ) ) 
} 


 