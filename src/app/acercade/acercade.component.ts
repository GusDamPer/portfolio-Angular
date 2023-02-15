import { Component } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service'

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {

  miPorfolio: any;

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit():void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio = data;
    });
  }
}
