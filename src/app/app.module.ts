import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './feature/components/header/header.component';
import { HomeComponent } from './feature/components/home/home.component';
import { NoticiasComponent } from './feature/components/noticias/noticias.component';
import { LandingpageComponent } from './feature/pages/landingpage/landingpage.component';
import { SobreojogoComponent } from './feature/components/sobreojogo/sobreojogo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NoticiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
