import { Component } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  miPorfolio: any;
  habilidadesList: any;

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit():void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{ //(8) me suscribo al observable
      console.log(data);

      this.miPorfolio = data; //(9b) asignamos a la variable definida
      this.habilidadesList = data.skill;
    });
  }
}


// al crear un componente desde CLI las importaciones y exportaciones
// se hacen automaticamente
