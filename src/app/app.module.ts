import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActitudesComponent } from './components/actitudes/actitudes.component';
import { MaestrosComponent } from './components/maestros/maestros.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MateriasComponent } from './components/materias/materias.component';

@NgModule({
  declarations: [
    AppComponent,
    AptitudesComponent,
    ActitudesComponent,
    MaestrosComponent,
    AlumnosComponent,
    CursosComponent,
    MateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
