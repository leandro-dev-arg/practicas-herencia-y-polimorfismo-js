/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/Director.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './sistemaAutenticacion.js';

//const cliente2 = new Cliente('María','16979808','8989');

const empleado= new Empleado('Juan Perez','35079151',10000);
empleado.asignarClave('12345')
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente= new  Gerente('Pedro Rivas','14657019',12000);
gerente.asignarClave('6556');
console.log(SistemaAutenticacion.login(gerente,'6556'));

//const director =new Director('Elena Moreno','68412315',15000);


const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('0111');
console.log(SistemaAutenticacion.login(cliente,'0111'));
