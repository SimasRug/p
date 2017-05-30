import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    AboutComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
