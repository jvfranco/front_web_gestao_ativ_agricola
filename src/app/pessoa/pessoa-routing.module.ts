import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
    AtualizacaoPessoaComponent,
    CadastroPessoaComponent,
    ListagemPessoaComponent,
    PessoaComponent
} from './components';

export const PessoaRoutes: Routes = [
    {
        path: 'pessoa',
        component: PessoaComponent,
        children: [
            {
                path: '',
                component: ListagemPessoaComponent
            },
            {
                path: 'cadastro',
                component: CadastroPessoaComponent
            },
            {
                path: 'atualizacao/:pessoaID',
                component: AtualizacaoPessoaComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(PessoaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PessoaRoutingModule {

}
