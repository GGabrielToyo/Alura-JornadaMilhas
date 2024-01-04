import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evironment } from 'src/environments/environment.development';
import { Resultado } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl: string = evironment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPassagens(search: any): Observable<Resultado>{
    const params = search;
    return this.http.get<Resultado>(`${this.apiUrl}/passagem/search`, {params});
  }

}
