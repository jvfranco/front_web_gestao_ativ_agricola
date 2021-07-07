import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
    AtualizacaoMaquinaComponent,
    CadastroMaquinaComponent,
    ListagemMaquinaComponent, 
    MaquinaComponent 
} from './components';


export const MaquinaRoutes: Routes = [
    {
        path: 'maquina',
        component: MaquinaComponent,
        children: [
            {
                path: '',
                component: ListagemMaquinaComponent
            },
            {
                path: 'cadastro',
                component: CadastroMaquinaComponent
            },
            {
                path: 'atualizacao/:maquinaID',
                component: AtualizacaoMaquinaComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(MaquinaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MaquinaRoutingModule {

}
