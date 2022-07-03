import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Propietario } from '../models/propietario';
import { PropietarioImpl } from '../models/propietario-impl';

@Component({
  selector: 'app-propietarios-item',
  templateUrl: './propietarios-item.component.html',
  styleUrls: ['./propietarios-item.component.css']
})
export class PropietariosItemComponent implements OnInit {
  @Input()  propietario: Propietario = new PropietarioImpl();
	@Output() propietarioSeleccionado = new EventEmitter<Propietario>();
  constructor() { }

  ngOnInit(): void {
  }

}
