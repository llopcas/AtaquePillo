import { Propietario } from "./propietario";

export class PropietarioImpl implements Propietario{
    nombre!: string;
	  nif!: string;
    apellido1!: string;
    apellido2!: string;  
    mail!: string;
    numeroCuenta!: number; 
    urlPropietario!: string;
    idPropietario!: string;
    

 
  constructor() {
        
  }

  getIdPropietario(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}

