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
  marcasCount: { [key: string]: number } = {};

  getVehiculos() {
    this.vehiculoService.getVehiculosLista().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.calcularTotalPorMarca();
    });
  }

  calcularTotalPorMarca() {
    this.marcasCount = {};

    this.vehiculos.forEach((vehiculo) => {
      if (this.marcasCount[vehiculo.marca]) {
        this.marcasCount[vehiculo.marca]++;
      } else {
        this.marcasCount[vehiculo.marca] = 1;
      }
    });
  }

  getMarcasUnicas(): string[] {
    return Object.keys(this.marcasCount);
  }

  ngOnInit() {
    this.getVehiculos();
  }
}
