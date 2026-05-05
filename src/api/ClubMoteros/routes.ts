import { Router } from 'express';
import { 
    RegistrarMoteroFunction,
    SacarMoteroDelGrupoFunction,
    ObtenerInfoMoteroFunction,
    RepostarMotoFunction,
    CambiarLlantasFunction
} from './moteros.api';

const moteros = Router()

moteros.get('/moteros',           ObtenerInfoMoteroFunction)
moteros.post('/moteros',          RegistrarMoteroFunction)
moteros.delete('/moteros',        SacarMoteroDelGrupoFunction)
moteros.patch('/moteros/repostar',RepostarMotoFunction)
moteros.patch('/moteros/llantas', CambiarLlantasFunction)

export default moteros