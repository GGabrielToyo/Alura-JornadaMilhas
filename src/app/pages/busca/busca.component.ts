import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from 'src/app/core/servicos/form-busca.service';
import { PassagensService } from 'src/app/core/servicos/passagens.service';
import { Dadosbusca, Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  passagens: Passagem[] = [];

  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) { }

  ngOnInit(): void {
    const buscaPadrao = {
      data: new Date().toISOString,
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: "Executiva"
    };

    const busca = this.formBuscaService.formEstaValido ? this.formBuscaService.obterDadosBusca() : buscaPadrao;

    this.passagensService.getPassagens(busca).subscribe(resp => {
      this.passagens = resp.resultado;
    });
  }

  busca(ev: Dadosbusca) {
    this.passagensService.getPassagens(ev).subscribe(resp => {
      this.passagens = resp.resultado;
    });
  }

}
