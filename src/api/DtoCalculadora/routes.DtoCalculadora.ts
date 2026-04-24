import { Router } from 'express';
import { SumaFunction, RestaFunction, MultiplicacionFunction, DivisionFunction } from './archivero.Calculadora';

const DtoCalculadora = Router();

DtoCalculadora.get('/suma',           SumaFunction);
DtoCalculadora.get('/resta',          RestaFunction);
DtoCalculadora.get('/multiplicacion', MultiplicacionFunction);
DtoCalculadora.get('/division',       DivisionFunction);

export default DtoCalculadora;