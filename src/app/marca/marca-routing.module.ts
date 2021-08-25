import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { 
    AtualizacaoMarcaComponent,
    CadastroMarcaComponent,
    ListagemMarcaComponent,
    MarcaComponent
} from './components';


export const MarcaRoutes: Routes = [
    {
        path: 'marca',
        component: MarcaComponent,
        children: [
            {
                path: '',
                component: ListagemMarcaComponent
            },
            {
                path: 'cadastro',
                component: CadastroMarcaComponent
            },
            {
                path: 'atualizacao/:marcaID',
                component: AtualizacaoMarcaComponent
            }
        ],
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(MarcaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MarcaRoutingModule {

}
