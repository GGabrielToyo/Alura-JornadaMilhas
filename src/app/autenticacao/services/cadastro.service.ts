import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evironment } from 'src/environments/environment.development';
import { PessoaUsuaria } from '../../core/types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl: string = evironment.apiUrl;

  constructor(private http: HttpClient) { }

  cadastrar(usuario: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, usuario);
  }

  buscarUsuario(): Observable<PessoaUsuaria> {  
    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`);
  }

  editarUsuario(usuario: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, usuario);
  }

}
