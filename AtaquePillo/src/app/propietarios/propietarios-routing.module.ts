import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropietarioFormComponent } from './propietario-form/propietario-form.component';
import { PropietariosComponent } from './propietarios/propietarios.component';

const routes: Routes = [
  {
	
    path: '',
	
    component: PropietariosComponent
	
  },
  {
	
    path: 'formulario',
	
    component: PropietarioFormComponent
	
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropietariosRoutingModule { }
