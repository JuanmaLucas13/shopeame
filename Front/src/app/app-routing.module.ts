import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';
import { CripDetailComponent } from './pages/crip-detail/crip-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'gestion', component: GestionComponent},
  {path: ':id', component: CripDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
