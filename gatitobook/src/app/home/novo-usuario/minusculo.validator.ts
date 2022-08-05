//Vamos criar uma função que no campo do usuário, só será aceito letras minúsculas

import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl) {
    const valor = control.value as string;
    if (valor !== valor.toLowerCase()) {
        return {minusculo:true};
    } else {
        return null;
    }
}
