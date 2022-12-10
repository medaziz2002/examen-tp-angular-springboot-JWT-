
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MestelephonesComponent } from './mestelephones/mestelephones.component';
import { AddTelephoneComponent } from './add-telephone/add-telephone.component';
import { FormsModule } from '@angular/forms';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateProduitComponent } from './update-telephone/update-telephone.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { TokenInterceptor } from './services/token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    MestelephonesComponent,
    AddTelephoneComponent,
    ListeTypesComponent,
    LoginComponent,
    ForbiddenComponent,
    UpdateProduitComponent,
    RechercheParTypeComponent,
    RechercheParNomComponent,
    UpdateTypeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
