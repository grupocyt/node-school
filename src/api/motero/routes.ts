import { Router } from 'express';
import { 
    RegistrarMoteroFunction,
    SacarMoteroDelGrupoFunction,
    ObtenerInfoMoteroFunction,
    RepostarMotoFunction,
    CambiarLlantasFunction
} from './motero.api';

const motero = Router()

motero.get('/moteros',              ObtenerInfoMoteroFunction)
motero.post('/moteros',             RegistrarMoteroFunction)
motero.delete('/moteros',           SacarMoteroDelGrupoFunction)
motero.patch('/moteros/repostar',   RepostarMotoFunction)
motero.patch('/moteros/llantas',    CambiarLlantasFunction)

export default motero