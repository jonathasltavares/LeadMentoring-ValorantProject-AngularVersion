import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './feature/landingpage/components/header/header.component';
import { HomeComponent } from './feature/landingpage/components/home/home.component';
import { NoticiasComponent } from './feature/landingpage/components/noticias/noticias.component';
import { SobreojogoComponent } from './feature/landingpage/components/sobreojogo/sobreojogo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NoticiasComponent,
    SobreojogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
