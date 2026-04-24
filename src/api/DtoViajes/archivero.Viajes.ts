import express from 'express'
  
export async function MadridBarcelonafunction( req:express.Request, res:express.Response ) {
 
       const respuesta:string = "Este avion va de madrid a barcelona en iberia a las 17PM";

    return res.status(200).send(respuesta) 
}   
export async function ComprarVueloMadridBarcelonaFunction( req:express.Request, res:express.Response ) {
const respuesta = {
    mensaje:"Usted ha comprado un vuelvo de Madrid a Barcelona. Estos son sus datos de abordaje",
    avion:"Boeing737, puerta de abordaje",
    hora:"17PM",
    datosdepasajero:req.body
}
    return res.status(200).send(respuesta) 
}   