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

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit():void{

  }

    nombre: string = 'Gustavo Perez';

    persona = {
        nombre: 'Gustavo',
        edad: 36
    };
    // interpolacion, para usarlo en elcomponente dentro de {{}}
    // sirve solo para este componente y ninguno mas.
}
