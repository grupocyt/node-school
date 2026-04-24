import { Router } from 'express'
import DtoTraducciones from './DtoTraducciones/routes.DtoTraducciones'
import DtoCalculadora from './DtoCalculadora/routes.DtoCalculadora';
import DtoRecursosHumanos from './Dto.RecursosHumanos/routes.DtoRecursosHumanos';
import DtoInventario from './DtoInventario/routes.DtoInventario';
import DtoViajes from './DtoViajes/routes.DtoViajes';


 //hola
 const api = Router()

api.use( '/DtoTraducciones',  DtoTraducciones)
api.use('/DtoCalculadora', DtoCalculadora);
api.use('/DtoRecursoshumanos', DtoRecursosHumanos)
api.use('/DtoInventario', DtoInventario)
api.use('/DtoViajes', DtoViajes)

             
export default api
