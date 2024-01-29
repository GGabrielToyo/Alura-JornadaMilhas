import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { BannerComponent } from "./banner/banner.component";
import { BotaoControleComponent } from "./botao-controle/botao-controle.component";
import { CardBuscaComponent } from "./card-busca/card-busca.component";
import { CardDepoimentoComponent } from "./card-depoimento/card-depoimento.component";
import { CardComponent } from "./card/card.component";
import { ContainerComponent } from "./container/container.component";
import { DropdownUfComponent } from "./dropdown-uf/dropdown-uf.component";
import { FooterComponent } from "./footer/footer.component";
import { FormBaseComponent } from "./form-base/form-base.component";
import { FormBuscaComponent } from "./form-busca/form-busca.component";
import { HeaderComponent } from "./header/header.component";
import { ModalComponent } from "./modal/modal.component";
import { SeletorPassageiroComponent } from "./seletor-passageiro/seletor-passageiro.component";
import { MaterialModule } from "../core/material/material.module";
import { DestaquesComponent } from "./destaques/destaques.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        BannerComponent,
        CardComponent,
        CardBuscaComponent,
        CardDepoimentoComponent,
        ContainerComponent,
        DropdownUfComponent,
        FooterComponent,
        FormBaseComponent,
        FormBuscaComponent,
        HeaderComponent,
        SeletorPassageiroComponent,
        ModalComponent,
        BotaoControleComponent,
        DestaquesComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        BannerComponent,
        CardComponent,
        CardBuscaComponent,
        CardDepoimentoComponent,
        ContainerComponent,
        DropdownUfComponent,
        FooterComponent,
        FormBaseComponent,
        FormBuscaComponent,
        HeaderComponent,
        SeletorPassageiroComponent,
        ModalComponent,
        BotaoControleComponent,
        DestaquesComponent
    ]
})

export class SharedModule { }