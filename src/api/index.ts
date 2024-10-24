import express from 'express'
import { httpResponse } from '../utility/https'
import { validationResult } from 'express-validator'
 
export async function GetHolaMundoFunction( req:express.Request, res:express.Response ) {



   const descriptionFunction = "Api Calculadora"

   var num1 = 7;
   var num2 = 30;
   var suma = num1 + num2;
   var resta= num1 - num2;
   var multi = num1 * num2;
   var Divicion = num1 / num2;
   var resul : any = {

      suma:"Los resultados de la suma son"+suma,
      resta: "Los resultados de la resta son:"+resta,
      multi:"Los resultadosde la multiplicacion son:"+multi,
      divi: "Los resultados de la divicion son:"+Divicion,

   };
   
   const request:any = { 
    status:true, 
    data: resul
  }                     // controlador 

   if( !request.status )     
    return res.status(401).send(httpResponse(descriptionFunction, 'error', null, request))

return res.status(200).send(httpResponse(descriptionFunction, 'success', request, null ))
}






export async function PostHolaMundoFunction( req:express.Request, res:express.Response ) {


 
     
    const {  num1,num2 } = req.body


    const descriptionFunction = "Api Calculadora"

   
    var suma = num1 + num2;
    var resta= num1 - num2;
    var multi = num1 * num2;
    var Divicion = num1 / num2;
    var resul : any = {
 
       suma:"Los resultados de la suma son"+suma,
       resta: "Los resultados de la resta son:"+resta,
       multi:"Los resultadosde la multiplicacion son:"+multi,
       divi: "Los resultados de la divicion son:"+Divicion,
 
    };
    
    const request:any = { 
     status:true, 
     data: resul
     } 
    if( !request.status )     
     return res.status(401).send(httpResponse(descriptionFunction, 'error', null, request))
 
 return res.status(200).send(httpResponse(descriptionFunction, 'success', request, null ))
 }

