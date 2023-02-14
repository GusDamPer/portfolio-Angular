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
//(5a) Importamos el módulo HttpClient para obtener los recursos del servidor.
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ExpeEduComponent,
    AcercadeComponent,
    PresentacionComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    //(5b) lo especificamos aquí tambien para poder utilizarlo.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
