import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../models/vehiculo';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css'],
  standalone: false,
})
export class VehiculoListComponent implements OnInit {
  constructor(private vehiculoService: VehiculoService) {}
  vehiculos: Array<Vehiculo> = [];

  getVehiculos() {
    this.vehiculoService.getVehiculosLista().subscribe((vehiculo) => {
      this.vehiculos = vehiculo;
    });
  }
  ngOnInit() {
    this.getVehiculos();
  }
}
