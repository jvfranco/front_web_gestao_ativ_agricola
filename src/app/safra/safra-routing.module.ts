import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { 
    AtualizacaoSafraComponent,
    CadastroSafraComponent,
    ListagemSafraComponent,
    SafraComponent 
} from './components';

export const SafraRoutes: Routes = [
    {
        path: 'safra',
        component: SafraComponent,
        children: [
            {
                path: '',
                component: ListagemSafraComponent
            },
            {
                path: 'cadastro',
                component: CadastroSafraComponent
            },
            {
                path: 'atualizacao/:safraID',
                component: AtualizacaoSafraComponent
            }
        ],
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(SafraRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SafraRoutingModule {

}
