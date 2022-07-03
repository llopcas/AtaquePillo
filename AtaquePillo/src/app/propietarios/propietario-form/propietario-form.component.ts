import { Component, OnInit } from '@angular/core';
import { PropietarioImpl } from '../models/propietario-impl';
import { PropietarioService } from '../service/propietario.service';

@Component({
  selector: 'app-propietario-form',
  templateUrl: './propietario-form.component.html',
  styleUrls: ['./propietario-form.component.css']
})
export class PropietarioFormComponent implements OnInit {
  propietario: PropietarioImpl = new PropietarioImpl();
  constructor(private propietarioService: PropietarioService) { }

  ngOnInit(): void {
  }
  create(): void {
	
    this.propietarioService.create(this.propietario);
	
  }
}
