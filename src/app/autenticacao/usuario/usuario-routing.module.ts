import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
    AtualizacaoUsuarioComponent,
    CadastroUsuarioComponent,
    ListagemUsuarioComponent,
    UsuarioComponent 
} from './components';

export const UsuarioRoutes: Routes = [
    {
        path: 'usuario',
        component: UsuarioComponent,
        children: [
            {
                path: '',
                component: ListagemUsuarioComponent
            },
            {
                path: 'cadastro',
                component: CadastroUsuarioComponent
            },
            {
                path: 'atualizacao/:usuarioID',
                component: AtualizacaoUsuarioComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(UsuarioRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UsuarioRoutingModule {

}
