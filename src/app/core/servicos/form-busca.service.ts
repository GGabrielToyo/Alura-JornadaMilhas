import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Dadosbusca } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;


  constructor(private dialog: MatDialog) {
    const somenteIda = new FormControl(false, [Validators.required]);
    const dataVolta = new FormControl(null, [Validators.required]);

    this.formBusca = new FormGroup({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta,
      conexoes: new FormControl(null),
      companhias: new FormControl(null)
    });

    somenteIda.valueChanges.subscribe(somenteIda => {
      if (somenteIda) {
        dataVolta.disable();
        dataVolta.setValidators(null);
      } else {
        dataVolta.enable();
        dataVolta.setValidators([Validators.required]);
      }
      dataVolta.updateValueAndValidity();
    });
  }

  getDescricaoPassageiros(): string {
    let descricao = '';

    const adultos = this.formBusca.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }

    const criancas = this.formBusca.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }

    const bebes = this.formBusca.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${bebes > 1 ? 's' : ''}`;
    }

    return descricao;
  }


  obterControle<T>(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl<T>;
  }

  obterDadosBusca(): Dadosbusca {
    const dataIdaControl = this.obterControle<Date>('dataIda');

    const dadosBusca: Dadosbusca = {
      pagina: 1,
      porPagina: 50,
      somenteIda: this.obterControle<boolean>('somenteIda').value,
      origemId: this.obterControle<number>('origem').value.id,
      destinoId: this.obterControle<boolean>('destino').value.id,
      tipo: this.obterControle<string>('tipo').value,
      passageirosAdultos: this.obterControle<number>('adultos').value,
      passageirosCriancas: this.obterControle<number>('criancas').value,
      passageirosBebes: this.obterControle<number>('bebes').value,
      dataIda: dataIdaControl.value.toISOString(),
    }

    const dataVoltaControl = this.obterControle<Date>('dataVolta');
    if (dataIdaControl) {
      dadosBusca.dataVolta = dataIdaControl.value.toISOString();
    }

    const conexoesControl = this.obterControle<number>('conexoes');
    if (conexoesControl.value) {
      dadosBusca.conexoes = conexoesControl.value;
    }

    return dadosBusca;
  }

  alterarTipo(event: MatChipSelectionChange, tipo: string) {
    if (event.selected) {
      this.formBusca.patchValue({
        tipo
      });
    }

  }

  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;

    this.formBusca.patchValue({
      origem: destino,
      destino: origem
    });
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }

  get formEstaValido(): boolean {
    return this.formBusca.valid;
  }

}
