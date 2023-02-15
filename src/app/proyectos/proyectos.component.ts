import { Component } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.css']
})

// exportamos para que module.ts pueda utilizar esta herramienta
// y debemos importarla desde module tambien

export class ProyectosComponent {

  miPorfolio: any;
  proyectosList: any;

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit():void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{ //(8) me suscribo al observable
      console.log(data);

      this.miPorfolio = data; //(9b) asignamos a la variable definida
      this.proyectosList = data.projects;
    });
  }
}
