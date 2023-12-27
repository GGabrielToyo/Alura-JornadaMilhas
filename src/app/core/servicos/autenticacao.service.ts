import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evironment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl: string = evironment.apiUrl;

  constructor(private http: HttpClient) { }

  autenticar(email: string, senha: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/auth/login`, {email, senha});
  }
}
