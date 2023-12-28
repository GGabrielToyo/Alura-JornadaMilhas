import { inject } from "@angular/core"
import { UserService } from "../servicos/user.service"
import { Router } from "@angular/router";

export const authGuard = () => {
    const userService = inject(UserService);
    const router = inject(Router);

    if(userService.estaLogado()){
        return true;
    } else {
        router.navigateByUrl('/login');
        return false;
    }
}