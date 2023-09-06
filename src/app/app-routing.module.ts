import { LoginComponent } from './components/login/login.component';
import { Enfant2Component } from './components/enfant2/enfant2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Enfant1Component } from './components/enfant1/enfant1.component';
import { ParentComponent } from './components/parent/parent.component';
import { apiGuard } from './guards/api.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: ParentComponent, canActivate:[apiGuard], children: [
    { path: 'enfant1', component: Enfant1Component },
    { path: 'enfant2', component: Enfant2Component},
    { path: '**', redirectTo: 'enfant1'}
  ]},
  { path: '**', redirectTo: '/'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
