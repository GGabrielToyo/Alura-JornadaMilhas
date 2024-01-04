import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/servicos/form-busca.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrls: ['./filtros-complementares.component.scss']
})
export class FiltrosComplementaresComponent {

  @Output() realizarbusca  = new EventEmitter();

  constructor(
    private formBuscaService: FormBuscaService
  ){}

  busca(){
    if(this.formBuscaService.formEstaValido) {
      this.formBuscaService.formBusca.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      return
    }
    this.realizarbusca.emit(this.formBuscaService.obterDadosBusca());
  }

}
