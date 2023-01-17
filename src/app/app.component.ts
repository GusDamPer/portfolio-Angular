import { Component } from '@angular/core';
// Component: es un decorador

@Component({
  selector: 'app-root',//valor para "llamar" al componente
  templateUrl: './app.component.html',//direccion del contenido html del componente
  styleUrls: ['./app.component.css'] //direccion del contenido CSS del componente
})
export class AppComponent {
  title = 'my-app';
}

/* 
El archivo app.component.ts es el unico que es obligatorio que este
dentro de @Component({
  template: ' aquí va código html',
  style: [' aquí va código css '] 
})
para así eliminar los archivos app.component.html y app.component.css
Pero esto no es común hacerlo, conviene tener todo separado.
*/
