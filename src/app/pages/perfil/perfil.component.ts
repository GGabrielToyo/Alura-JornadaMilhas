import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/servicos/cadastro.service';
import { FormularioService } from 'src/app/core/servicos/formulario.service';
import { TokenService } from 'src/app/core/servicos/token.service';
import { UserService } from 'src/app/core/servicos/user.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  titulo: string = 'Olá, ';
  textoBotao: string = 'ATUALIZAR';
  perfilComponent: boolean = true;

  token: string = '';
  nome: string = '';
  usuario!: PessoaUsuaria;
  form!: FormGroup<any> | null;

  constructor(
    private tokenService: TokenService,
    private cadastroService: CadastroService,
    private formService: FormularioService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarUsuario().subscribe(usuario => {
      this.usuario = usuario;
      this.nome = usuario.nome;
      this.carregarForm();
    })
  }

  carregarForm() {
    this.form = this.formService.getCadastro();
    this.form?.patchValue({
      nome: this.usuario.nome,
      nascimento: this.usuario.nascimento,
      cpf: this.usuario.cpf,
      telefone: this.usuario.telefone,
      email: this.usuario.email,
      senha: this.usuario.senha,
      cidade: this.usuario.cidade,
      estado: this.usuario.estado,
      genero: this.usuario.genero
    });
  }

  atualizar() {
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado,
      genero: this.form?.value.genero
    }

    this.cadastroService.editarUsuario(dadosAtualizados).subscribe({
      next: () => {
        alert("Cadastro atualizado com sucesso!");
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deslogar() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}
