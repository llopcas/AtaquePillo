import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Propietario } from '../../models/propietario';
import { PropietarioImpl } from '../../models/propietario-impl';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {
  @Input() propietario: Propietario = new PropietarioImpl () ;
	
  @Output() propietarioEliminar = new EventEmitter<PropietarioImpl>();
  constructor() { }

  ngOnInit(): void {
  }
 
  eliminar(): void {
	
    this.propietarioEliminar.emit();
	
  }
  getIdPropietario(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
