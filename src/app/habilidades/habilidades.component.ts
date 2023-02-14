import { Component } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit():void{

  }
}


// al crear un componente desde CLI las importaciones y exportaciones
// se hacen automaticamente
