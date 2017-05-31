import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from './about/about.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ContactComponent } from "./contact/contact.component";
const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeContentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
