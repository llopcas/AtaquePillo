import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ShellComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports:[
    ShellComponent
  ]
})
export class CoreModule { }
