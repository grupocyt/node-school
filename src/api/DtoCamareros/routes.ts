import { Router } from 'express';
import { obtenerinfocamarero, obtenerinfofuncionesdelcamarero, obtenerinfohorariocamarero, obtenerinfopuestodelcamarero,} from './Camareros.api';
 

const camarero = Router()

mecanica.get('/obtenerinfocamarero',                             obtenerinfocamarero)
mecanica.get(`/obtenerinfofuncionesdelcamarero`,                 obtenerinfofuncionesdelcamarero)
mecanica.get(`/obtenerinfohorariocamarero`,                      obtenerinfohorariocamarero )
mecanica.get(`/obtenerinfopuestodelcamarero`,                    obtenerinfopuestodelcamarero )

export default camarero