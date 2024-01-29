import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evironment } from 'src/environments/environment.development';
import { Companhia } from '../../core/types/type';

@Injectable({
  providedIn: 'root'
})
export class CompanhiaService {

  private  apiUrl: string = evironment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  listar () : Observable<Companhia[]> {
    return this.http.get<Companhia[]>(`${this.apiUrl}/companhias`);
  }
}
