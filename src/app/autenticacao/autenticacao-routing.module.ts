import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CadastroComponent } from "./cadastro/cadastro.component";
import { authGuard } from "./guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { PerfilComponent } from "./perfil/perfil.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [authGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AutenticacaoRoutingModule {}