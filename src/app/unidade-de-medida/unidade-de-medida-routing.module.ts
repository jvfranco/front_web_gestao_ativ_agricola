import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import {
    UnidadeDeMedidaComponent,
    CadastroComponent,
    ListagemComponent,
    AtualizacaoComponent,
    DetalheUnidMedComponent
} from './components';

export const UnidadeDeMedidaRoutes: Routes = [
    {
        path: 'unidade-de-medida',
        component: UnidadeDeMedidaComponent,
        children: [
            {
                path: '',
                component: ListagemComponent
            },
            {
                path: 'cadastro',
                component: CadastroComponent
            },
            {
                path: 'atualizacao/:unidMedidaID',
                component: AtualizacaoComponent
            }
        ],
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(UnidadeDeMedidaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UnidadeDeMedidaRoutingModule {

}
