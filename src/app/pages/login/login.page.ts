import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  apellido: string = "Rodriguez";
  edad: number = 29;
  usuario: string = "";

  Persona: any = {
    nombre: 'José',
    apellido: 'Suarez',
    edad: 34
  }

  listaP: any = [
    {
      id: 24,
      comuna: 'Lo espejo'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irPagina(){
    //Puedo crear cualquier logica de programación
    this.router.navigate(['/agregar']);
  }

}
