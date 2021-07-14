import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
    AtualizacaoTalhaoComponent,
    CadastroTalhaoComponent,
    ListagemTalhaoComponent,
    TalhaoComponent 
} from './components';

export const TalhaoRoutes: Routes = [
    {
        path: 'talhao',
        component: TalhaoComponent,
        children: [
            {
                path: '',
                component: ListagemTalhaoComponent
            },
            {
                path: 'cadastro',
                component: CadastroTalhaoComponent
            },
            {
                path: 'atualizacao/:talhaoID',
                component: AtualizacaoTalhaoComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(TalhaoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TalhaoRoutingModule {

}
