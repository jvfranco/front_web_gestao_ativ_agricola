import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AtualizacaoPropriedadeComponent, CadastroPropriedadeComponent, ListagemPropriedadeComponent, PropriedadeComponent } from './components';

export const PropriedadesRoutes: Routes = [
    {
        path: 'propriedade',
        component: PropriedadeComponent,
        children: [
            {
                path: '',
                component: ListagemPropriedadeComponent
            },
            {
                path: 'cadastro',
                component: CadastroPropriedadeComponent
            },
            {
                path: 'atualizacao/:propriedadeID',
                component: AtualizacaoPropriedadeComponent
            }
        ],
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(PropriedadesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PropriedadeRoutingModule {

}
