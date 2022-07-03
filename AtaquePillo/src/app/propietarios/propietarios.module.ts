import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropietariosRoutingModule } from './propietarios-routing.module';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropietariosItemComponent } from './propietarios-item/propietarios-item.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { PropietarioComponent } from './propietarios/propietario/propietario.component';
import { PropietarioFormComponent } from './propietario-form/propietario-form.component';


@NgModule({
  declarations: [
    PropietariosComponent,
    PropietariosItemComponent,
    PropietarioComponent,
    PropietarioFormComponent
  ],
  imports: [
    CommonModule,
    PropietariosRoutingModule,
    FormsModule
  ],
  exports:[PropietariosComponent],
  providers: [AuxiliarService]
})
export class PropietariosModule { }
