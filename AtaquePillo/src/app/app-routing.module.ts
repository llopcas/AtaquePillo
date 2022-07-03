import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
	
    path: '',
	
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
	
  },
	
  {
	
    path: 'propietarios',
	
    loadChildren: () => import('./propietarios/propietarios.module').then(m => m.PropietariosModule)
	
  }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
