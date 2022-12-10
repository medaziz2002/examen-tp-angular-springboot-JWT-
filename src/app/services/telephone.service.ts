import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MestelephonesComponent } from './../mestelephones/mestelephones.component';
import { telephone } from './../model/telephone.model';
import { Type } from './../model/type.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeWrapper } from '../model/typeWarpped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {
apiURL: string = 'http://localhost:8888/springboot/api';
apiURLType: string = 'http://localhost:8888/springboot/type';
telephones!: telephone[];
types!:Type[];
telephone=new telephone();
telephonesRecherche!:telephone[];
telephoneRechercheNom!:telephone[];

constructor(private router:Router,private http:HttpClient,private authService :AuthService) {

  }

  listetelephones():Observable<telephone[]> {
     return this.http.get<telephone[]>(this.apiURL+"/all");
  }

  listetype():Observable<TypeWrapper>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<TypeWrapper>(this.apiURLType,{headers:httpHeaders});

    }

  ajoutertelephone( tele: telephone ):Observable<telephone>{
    let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.post<telephone>(this.apiURL, tele, {headers:httpHeaders});
    }



supprimertelephone(id:number)
{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.get<TypeWrapper>(this.apiURLType,{headers:httpHeaders});

}





consultertelephone(id:number):Observable<telephone>
{
  const url = `${this.apiURL}/${id}`;
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.get<telephone>(url,{headers:httpHeaders});
}


triertelephones(){
  this.telephones = this.telephones.sort((n1,n2) => {
  if (n1.idTelephone! > n2.idTelephone!) {
  return 1;
  }
  if (n1.idTelephone! < n2.idTelephone!) {
  return -1;
  }
  return 0;
  });
  }

  updatetelephone(tele :telephone) : Observable<telephone>
  {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<telephone>(this.apiURL, tele, {headers:httpHeaders});

  }


  consultertype(id:number): Type{
      return this.types.find(type => type.idType == id)!;}
       telesty:string='telesty';
rechercherpartype(idType:number)
{
  const url = `${this.apiURL}/tele/${idType}`;
  return this.http.get(url);
}




telesnom: string = 'telesnom';
rechercherparnom(nom:string):Observable<telephone[]>
{
const url = `${this.apiURL}/${this.telesnom}/${nom}`;
return this.http.get<telephone[]>(url);
}


ajoutertype( type: Type):Observable<Type>{
  return this.http.post<Type>(this.apiURLType, type, httpOptions);
 }

 supprimerType(id : number) {
  const url = `${this.apiURLType}/${id}`;
  return this.http.delete(url, httpOptions);
  }

}

