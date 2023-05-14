import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { ActitudesComponent } from './components/actitudes/actitudes.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { MaestrosComponent } from './components/maestros/maestros.component';
import { MateriasComponent } from './components/materias/materias.component';
import { CursosComponent } from './components/cursos/cursos.component';

const routes: Routes = [
  {path: 'aptitud',component: AptitudesComponent},
  {path: 'actitud', component: ActitudesComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'maestros', component: MaestrosComponent},
  {path: 'materias', component: MateriasComponent},
  {path: 'cursos', component: CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
