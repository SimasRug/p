import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const appRoutes = [
    { path:'about', component:AboutComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ] 
})
export class AppRoutingModule {

}