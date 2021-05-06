import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesdeChileComponent } from './desde-chile/desde-chile.component';
import { DesdeChinaComponent } from './desde-china/desde-china.component';
import { DesdeVenezuelaComponent } from './desde-venezuela/desde-venezuela.component';


const routes: Routes = [
  {path: '' , component: DesdeChileComponent},
  {path:'desdeChina',component: DesdeChinaComponent},
  {path:'desdeVenezuela',component: DesdeVenezuelaComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
