import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/servicos/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {

  constructor(private serviceUnidadeFederativa: UnidadeFederativaService) { }

  @Input() label: string = '';
  @Input() iconPrefix: string = '';
  @Input() control!: FormControl;

  estados: UnidadeFederativa[] = [];
  filteredOptions$?: Observable<UnidadeFederativa[]>;

  ngOnInit(): void {
    this.serviceUnidadeFederativa.listar().subscribe(resp => {
      this.estados = resp;
    });

    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarUfs(value))
    )
  }

  filtrarUfs(value: string): UnidadeFederativa[] {
    const valorFiltrado = value?.toLowerCase();
    const result = this.estados.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
    return result;
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value.toLowerCase();

    return this.estados.filter(option => option.nome.toLowerCase().includes(filterValue));
  }


}
