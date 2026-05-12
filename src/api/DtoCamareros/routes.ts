import { Router } from 'express';
import { obtenerinfocamarero, obtenerinfofuncionesdelcamarero, obtenerinfohorariocamarero, obtenerinfopuestodelcamarero,} from './Camareros.api';
 

const camarero = Router()

camarero.get('/obtenerinfocamarero',                             obtenerinfocamarero)
camarero.get(`/obtenerinfofuncionesdelcamarero`,                 obtenerinfofuncionesdelcamarero)
camarero.get(`/obtenerinfohorariocamarero`,                      obtenerinfohorariocamarero )
camarero.get(`/obtenerinfopuestodelcamarero`,                    obtenerinfopuestodelcamarero )

export default camarero