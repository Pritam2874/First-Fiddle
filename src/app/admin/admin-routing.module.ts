import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../header/header.component';


const routes: Routes = [
  {path: '', component: AdminComponent,
  children:[
    {path: 'header', component: HeaderComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
