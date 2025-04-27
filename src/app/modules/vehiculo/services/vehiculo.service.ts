import { Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getVehiculosLista(): Observable<any> {
    return this.http.get(`${this.apiUrl}/202212_MISW4104_Grupo1.json`);
  }
}
