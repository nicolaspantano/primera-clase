import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase1';
  edadUno='';
  edadDos='';
  promedio:any;

  miUsuario = new Usuario();

  limpiar(){
    this.edadUno='';
    this.edadDos='';
    this.promedio='';
  }

  calcular(){
    this.promedio = (parseInt(this.edadUno) + parseInt(this.edadDos))/2;
  }
}
