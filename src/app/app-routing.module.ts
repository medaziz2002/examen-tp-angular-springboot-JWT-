import { ListeTypesComponent } from './liste-types/liste-types.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { UpdateProduitComponent } from './update-telephone/update-telephone.component';
import { telephoneguard } from './guard/telephone.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { AddTelephoneComponent } from './add-telephone/add-telephone.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MestelephonesComponent } from './mestelephones/mestelephones.component';

const routes: Routes = [
  {path :"Mestelephone", component : MestelephonesComponent},
  {path :"add-téléphone", component : AddTelephoneComponent,canActivate:[telephoneguard]},
  {path:"login",component:LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path:'update-telephone/:id',component:UpdateProduitComponent},
  {path:'recherche-type'  ,component:RechercheParTypeComponent},
  {path:'recherche-nom' ,component:RechercheParNomComponent},
  {path:'liste-type' ,component:ListeTypesComponent},
  {path : "",redirectTo:"Mestelephone" ,pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
