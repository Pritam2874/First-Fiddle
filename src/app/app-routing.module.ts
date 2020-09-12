import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'our-team', component: OurTeamComponent},
  {path: 'brands', component: BrandsComponent},
  {path: 'press-release', component: PressReleaseComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'franchise', component: FranchiseComponent},

  {path: 'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}, //for featured module

  // Child component start
  {
    path:'about',
    children:[
      {path: '', component:AboutComponent},
      {path: 'our-team', component: OurTeamComponent}
    ],
  },


  
  //Wildcard Route sab se neeche rakhate hai
  {
    path:'**',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
