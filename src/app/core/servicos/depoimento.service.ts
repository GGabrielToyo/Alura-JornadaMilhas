import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { evironment } from 'src/environments/environment.development';
import { Depoimento } from '../types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = evironment.apiUrl;

  listar(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }

}
