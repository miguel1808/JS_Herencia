/*Importación de clases*/
import {Cliente} from './Cliente.js'

import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/Director.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutentificacion } from './SistemaAutentificacion.js';



const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez','12345678');
empleado.asignarClave('12345');
const gerente = new Gerente('Carlos','12345678',1000);
const director = new Director('Carlos','12345678',5000);


console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());

console.log(SistemaAutentificacion.login(empleado,'12345'))
