import { Component, OnInit } from '@angular/core';
import { Tercero } from 'src/app/models/tercero';
import { TercerosService } from 'src/app/services/terceros.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private terceroService:TercerosService) { }
  tercero:Tercero;
  ngOnInit() {
    this.tercero = new Tercero();
  }

  buscarTercero(){
    this.terceroService.buscar(this.tercero.numIdentificacion).subscribe(result => {

    })
  }
}
