import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        ]
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
