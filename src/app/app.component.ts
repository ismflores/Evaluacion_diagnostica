// importar modulos de formularios para poder manipular correctamente se importa en app.component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cuadroOperaciones: string = '';

  anadirNumero(numero: string): void {
    this.cuadroOperaciones += numero;
  }

  resultado(): void {
    try {
      this.cuadroOperaciones = eval(this.cuadroOperaciones); //eval evalua el operador para generar un resultado
    } catch (error) {
      this.cuadroOperaciones = 'Error';
    }
  }

  borrar(): void {
    this.cuadroOperaciones = '';
  }
}
