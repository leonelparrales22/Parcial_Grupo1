import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoListComponent } from './vehiculo-list.component';
import { VehiculoService } from '../../services/vehiculo.service';
import { of } from 'rxjs';
import { Vehiculo } from '../../models/vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let mockVehiculoService: jasmine.SpyObj<VehiculoService>;

  // Datos de prueba
  const mockVehiculos: Vehiculo[] = [
    { id: 1, marca: 'Toyota', linea: 'Corolla', modelo: 2017 },
    { id: 2, marca: 'Honda', linea: 'Civic', modelo: 2020 },
    { id: 3, marca: 'Toyota', linea: 'RAV4', modelo: 2019 },
  ];

  beforeEach(async () => {
    // Crear un spy para el servicio
    mockVehiculoService = jasmine.createSpyObj('VehiculoService', [
      'getVehiculosLista',
    ]);
    mockVehiculoService.getVehiculosLista.and.returnValue(of(mockVehiculos));

    await TestBed.configureTestingModule({
      declarations: [VehiculoListComponent],
      providers: [{ provide: VehiculoService, useValue: mockVehiculoService }],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should desplegar total de filas y mostrar las columnas correspondientes', () => {
    // Obtener las filas de la tabla (incluyendo el encabezado)
    const tableRows = fixture.nativeElement.querySelectorAll('tr');

    // 1 encabezado 3 registros
    expect(tableRows.length).toBe(4);

    // Verificar que el contenido sea igual en este caso con el primer registro del MockUp
    const firstDataRow = tableRows[1].querySelectorAll('td');
    expect(firstDataRow[0].textContent).toContain('Toyota');
    expect(firstDataRow[1].textContent).toContain('Corolla');
    expect(firstDataRow[2].textContent).toContain('2017');
  });

  it('should calcular totales de las marcas', () => {
    expect(component.marcasCount['Toyota']).toBe(2);
    expect(component.marcasCount['Honda']).toBe(1);
  });
});
