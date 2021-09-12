import { Component, OnInit } from '@angular/core';
import { EmpleadoService, Empleado} from './../service/empleado.service';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {



  listaEmpleados: Empleado[] = [
    {id: 1, nombre:"Daniel", email:"danifell99@gamil.com",telefono:"3105719253"},
    {id: 2, nombre:"Juan", email:"juancho@gamil.com",telefono:"32224563456"},
    {id: 3, nombre:"Alexandra", email:"alexandra@gamil.com",telefono:"3112344334"},
  ];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleadoService.getEmpleados().then
    (listaEmpleados => this.listaEmpleados = listaEmpleados)
  }
}
