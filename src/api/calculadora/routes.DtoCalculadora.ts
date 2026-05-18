import { Router } from 'express' 
import { SumaFunction } from './superArchivero.Calculadora'
     
const DtoCalculadora = Router()
 
DtoCalculadora.get( '/suma',          SumaFunction )

export default DtoCalculadora    


