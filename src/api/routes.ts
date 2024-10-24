import { Router } from 'express'

import { verifyToken } from '../decorator/http/protected'
import { checkSchemaHolaMundo } from './validations'

import { GetHolaMundoFunction, PostHolaMundoFunction } from '.'

 
const api = Router()


 
api.get( "/calculadora", GetHolaMundoFunction )
api.post( "/calculadora", PostHolaMundoFunction )


export default api
