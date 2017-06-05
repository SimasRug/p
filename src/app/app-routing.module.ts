import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from './about/about.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from './projects/projects.component';

const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeContentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '**', redirectTo: '/home' }

];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
