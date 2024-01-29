import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/autenticacao/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ){}
  
  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();
    if(formCadastro?.value) {
      const novoUsuario: PessoaUsuaria = formCadastro.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadastrar(novoUsuario).subscribe({
        next: (resp) => {
          this.router.navigateByUrl('auth/login');
        },
        error: (err) => {
          console.log(err);
        }
      }); 
    }
  }
}
