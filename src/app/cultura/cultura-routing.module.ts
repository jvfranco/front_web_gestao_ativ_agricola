import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    CulturaComponent,
    ListagemCulturaComponent,
    CadastroCulturaComponent,
    AtualizacaoCulturaComponent
} from './components';

export const CulturaRoutes: Routes = [
    {
        path: 'cultura',
        component: CulturaComponent,
        children: [
            {
                path: '',
                component: ListagemCulturaComponent
            },
            {
                path: 'cadastro',
                component: CadastroCulturaComponent
            },
            {
                path: 'atualizacao/:culturaID',
                component: AtualizacaoCulturaComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(CulturaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CulturaRoutingModule {

}
