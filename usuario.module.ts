import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { DesdeChinaComponent } from './desde-china/desde-china.component';
import { DesdePeruComponent } from './desde-peru/desde-peru.component';
import { DesdeVenezuelaComponent } from './desde-venezuela/desde-venezuela.component';
import { DesdeChileComponent } from './desde-chile/desde-chile.component';
import { HolamundoModule } from '../holamundo/holamundo.module';


@NgModule({
  declarations: [DesdeChinaComponent,DesdePeruComponent,DesdeVenezuelaComponent,DesdeChileComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
   HolamundoModule
  ]
})
export class UsuarioModule { }
