import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisterMotorcycleComponent } from './components/register-motorcycle/register-motorcycle.component';
import { ConsultComponent } from './components/consult/consult.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConsultFilterComponent } from './components/consult-filter/consult-filter.component';

const routes: Routes = [
    {path: '' , component:  SidebarComponent},
    {path: 'registered' , component:  RegisterMotorcycleComponent},
    {path:'consult', component: ConsultComponent},
    {path:'consultFilter', component: ConsultFilterComponent},
    {path: '**', pathMatch: 'full', redirectTo : ''}
  ];

  @NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})


  export class AppRoutingModule { }
  