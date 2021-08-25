import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { HomeComponent } from './components';
import { HomeOcorrenciaComponent } from './components/home-ocorrencia';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: HomeOcorrenciaComponent 
            } //,
    //         {
    //             path: 'cadastro',
    //             component: 
    //         },
    //         {
    //             path: 'atualizacao/:insumoID',
    //             component: 
    //         }
        ],
        canActivate: [AuthGuard]
     }
];

@NgModule({
    imports: [
        RouterModule.forChild(HomeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {

}
