import { Component } from '@angular/core';
import { CadastroService } from 'src/app/core/servicos/cadastro.service';
import { FormularioService } from 'src/app/core/servicos/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent = false;

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService
  ){}
  
  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();
    if(formCadastro?.value) {
      const novoUsuario: PessoaUsuaria = formCadastro.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadastrar(novoUsuario).subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.log(err);
        }
      }); 
    }
  }
}
