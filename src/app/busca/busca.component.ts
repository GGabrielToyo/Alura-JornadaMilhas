import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/busca/services/passagens.service';
import { Dadosbusca, Destaques, Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  passagens: Passagem[] = [];
  destaques?: Destaques;

  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) { }

  ngOnInit(): void {
    const buscaPadrao: Dadosbusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: "Executiva"
    };

    const busca = this.formBuscaService.formEstaValido ? this.formBuscaService.obterDadosBusca() : buscaPadrao;

    this.passagensService.getPassagens(busca).pipe(take(1)).subscribe(resp => {
      this.passagens = resp.resultado;
      this.formBuscaService.formBusca.patchValue({
        precoMin: resp.precoMin,
        precoMax: resp.precoMax,
      });
      this.obterDestaques();
    })
  }

  busca(ev: Dadosbusca) {
    this.passagensService.getPassagens(ev).subscribe(resp => {
      this.passagens = resp.resultado;
    });
  }

  obterDestaques() {
    this.destaques = this.passagensService.obterPassagensDestaques(this.passagens);
  }

}
