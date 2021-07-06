import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
    AtualizacaoHibridoComponent, 
    CadastroHibridoComponent, 
    HibridoComponent, 
    ListagemHibridoComponent 
} from './components';

export const HibridoRoutes: Routes = [
    {
        path: 'hibrido',
        component: HibridoComponent,
        children: [
            {
                path: '',
                component: ListagemHibridoComponent
            },
            {
                path: 'cadastro',
                component: CadastroHibridoComponent
            },
            {
                path: 'atualizacao/:hibridoID',
                component: AtualizacaoHibridoComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(HibridoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HibridoRoutingModule {

}
