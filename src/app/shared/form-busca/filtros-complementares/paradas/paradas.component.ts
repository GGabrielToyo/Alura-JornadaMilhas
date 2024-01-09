import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { OpcoesDeParada } from 'src/app/core/types/type';

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.component.html',
  styleUrls: ['./paradas.component.scss']
})
export class ParadasComponent implements OnInit {

  opcoesSelecionadas: OpcoesDeParada | null = null;
  conexoesControl: FormControl<number | null>;

  constructor(private formBuscaService: FormBuscaService) {
    this.conexoesControl = this.formBuscaService.obterControle('conexoes');
  }

  ngOnInit(): void {
    this.conexoesControl.valueChanges.subscribe(value => {
      if (value === null) {
        this.opcoesSelecionadas = null;
      }
    });
  }

  opcoes: OpcoesDeParada[] = [
    {
      display: "Direto",
      value: "0"
    },
    {
      display: "1 conexão",
      value: "1"
    },
    {
      display: "2 conexões",
      value: "2"
    },
    {
      display: "Mais de 2 conexões",
      value: "3"
    },
  ]

  paradaSelecionada(opcao: OpcoesDeParada): boolean {
    return this.opcoesSelecionadas === opcao;
  }

  alternarParada(opcao: OpcoesDeParada, checked: boolean) {
    if (!checked) {
      this.opcoesSelecionadas = null;
      this.formBuscaService.formBusca.patchValue({
        conexoes: null
      })
      return
    }
    this.opcoesSelecionadas = opcao
    this.formBuscaService.formBusca.patchValue({
      conexoes: Number(opcao.value)
    })
  }

  incluirParada(opcao: OpcoesDeParada): boolean{
    if(!this.opcoesSelecionadas){
      return false;
    }
    return this.opcoesSelecionadas.value > opcao.value;
  }


}
