import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/servicos/depoimento.service';
import { PromocaoService } from 'src/app/core/servicos/promocao.service';
import { Depoimento, Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private servicePromocoes: PromocaoService,
      private serviceDepoimento: DepoimentoService){}

  promocoes?: Promocao[] = [];
  depoimentos?: Depoimento[] = [];

  ngOnInit(): void {
    this.servicePromocoes.listar().subscribe(resp => {
      this.promocoes = resp;
    });

    this.serviceDepoimento.listar().subscribe(resp => {
      this.depoimentos = resp;
    })

  }
}
