import { Nivel } from '../model/Nivel';
import datos from '../data/datos.json';

const NIVELES: Nivel[] = datos;

export const getNivel = (imc: number): Nivel => {
  const nivel = NIVELES.find(n => imc >= n.extremoInferior && imc <= n.extremoSuperior);

  if (!nivel) {
    throw new Error(`No se encontró nivel para IMC: ${imc}`);
  }

  return nivel;
};
