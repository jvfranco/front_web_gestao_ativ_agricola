import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AtividadeComponent, ListagemAtividadeComponent } from './components';

export const AtividadeRoutes: Routes = [
    {
        path: 'atividades',
        component: AtividadeComponent,
        children: [
            {
                path: '',
                component: ListagemAtividadeComponent
            }
        ],
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(AtividadeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AtividadeRoutingModule {

}
