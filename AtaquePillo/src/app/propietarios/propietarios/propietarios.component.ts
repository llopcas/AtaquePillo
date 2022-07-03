import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Propietario } from '../models/propietario';
import { PropietarioImpl } from '../models/propietario-impl';
import { PropietarioService } from '../service/propietario.service';


@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css']
})
export class PropietariosComponent implements OnInit {
  propietarios: Propietario[] = [];
	todosPropietarios: Propietario[] = [];
	propietarioVerDatos: Propietario = new PropietarioImpl();
  numPaginas: number = 0;
  constructor(    
  private propietarioService: PropietarioService,
	
  private auxService: AuxiliarService) { }

  ngOnInit(): void {    this.propietarioService.getPropietarios().subscribe((response) => this.propietarios = this.propietarioService.extraerPropietarios(response));
	
    this.getTodosPropietarios();
  }
  verDatos(propietario: Propietario): void {
    this.propietarioVerDatos = propietario;
  }
  onPropietarioEliminar(propietario: Propietario): void {
    // console.log(`He eliminado a ${propietario.nombre}`);
    // this.propietarios = this.propietarios.filter(p => propietario !== p)
  }

  getTodosPropietarios(): void {
	this.propietarioService.getPropietarios().subscribe(r => {
	this.numPaginas = this.auxService.getPaginasResponse(r);
	for (let index = 1; index <= this.numPaginas; index++) {
	this.propietarioService.getPropietariosPagina(index).subscribe(response => {
	this.todosPropietarios.push(...this.propietarioService.extraerPropietarios(response));
	});
	}
	});
  }
  getIdPropietario(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }

}
