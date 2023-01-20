import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// importamos los componentes *
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExpeEduComponent } from './expe-edu/expe-edu.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ExpeEduComponent,
    AcercadeComponent,
    PresentacionComponent,
    NavbarComponent,
    FooterComponent // * y los declaramos
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
