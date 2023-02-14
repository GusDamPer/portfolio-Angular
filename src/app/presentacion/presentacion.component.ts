import { Component } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {

  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit():void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{ //(8) me suscribo al observable
      console.log(data);

      this.miPorfolio = data; //(9b) asignamos a la variable definida
    });
  }
}
