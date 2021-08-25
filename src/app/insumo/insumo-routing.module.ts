import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { 
    AtualizacaoInsumoComponent, 
    CadastroInsumoComponent, 
    InsumoComponent, 
    ListagemInsumoComponent 
} from './components';


export const InsumoRoutes: Routes = [
    {
        path: 'insumo',
        component: InsumoComponent,
        children: [
            {
                path: '',
                component: ListagemInsumoComponent
            },
            {
                path: 'cadastro',
                component: CadastroInsumoComponent
            },
            {
                path: 'atualizacao/:insumoID',
                component: AtualizacaoInsumoComponent
            }
        ],
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(InsumoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InsumoRoutingModule {

}
