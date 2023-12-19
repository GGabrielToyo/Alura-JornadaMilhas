import { Component } from '@angular/core';
import { FormBuscaService } from 'src/app/core/servicos/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  constructor(public formBuscaService: FormBuscaService){}

  buscar(): void {
    console.log(this.formBuscaService.formBusca.value);
  }

}
