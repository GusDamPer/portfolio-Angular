import { Component } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service'; //(3)*

@Component({
  selector: 'app-expe-edu',
  templateUrl: './expe-edu.component.html',
  styleUrls: ['./expe-edu.component.css']
})
export class ExpeEduComponent {

  miPorfolio:any; //(9a) variable de tipo any.
  experienciaList:any; //(10a) se crea la variable para recorrer las listas
  educacionList:any;

  //(2)Se crea el constructor y se agrega la referencia *(3) arriba.
  constructor(private datosPorfolio:PorfolioService){}

  //(4) para acceder cuando nosotros querramos, creamos los métodos o propiedades
  //
  ngOnInit():void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{ //(8) me suscribo al observable
      console.log(data);

      this.miPorfolio = data; //(9b) asignamos a la variable definida
      this.experienciaList=data.experience; //(10b)
      this.educacionList=data.education;
    });
  }

}
