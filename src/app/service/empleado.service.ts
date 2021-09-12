import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Empleado{
  id: number;
  nombre: string;
  email: string;
  telefono: string;
}


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  constructor(private http:HttpClient) { 
  }

  getEmpleados(){
    return this.http.get<any>("../empleados.json")
    .toPromise()
    .then(res => <Empleado[]> res.data)
    .then(data => {return data;});
  }
}
