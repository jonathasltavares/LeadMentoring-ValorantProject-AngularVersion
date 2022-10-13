import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './feature/pages/cadastro/cadastro.component';
import { LandingpageComponent } from './feature/pages/landingpage/landingpage.component';
import { LoginComponent } from './feature/pages/login/login.component';

const routes: Routes = [
  {path: '', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path:'cadastro',component: CadastroComponent},
  {path:'index', component: LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
