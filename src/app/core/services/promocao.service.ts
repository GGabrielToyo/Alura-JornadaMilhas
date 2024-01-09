import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evironment } from 'src/environments/environment';
import { Promocao } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl: string = evironment.apiUrl;

  listar(): Observable<Promocao[]> {
    return this.httpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }
}
