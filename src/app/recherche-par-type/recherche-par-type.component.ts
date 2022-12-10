import { AuthService } from './../services/auth.service';
import { TelephoneService } from './../services/telephone.service';
import { telephone } from './../model/telephone.model';
import { Component, OnInit } from '@angular/core';
import {Type} from'./../model/type.model';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
})
export class RechercheParTypeComponent implements OnInit {


  telephones!:telephone[];
  IdType!:number;
  types!:Type[];
  constructor(private TelephoneService:TelephoneService,public AuthService:AuthService)
  {
  }


  ngOnInit(): void {
    this.TelephoneService.listetype().
    subscribe(typs => {this.types = typs._embedded.types;
    console.log(typs);
    });
    }
  onChange() {
    this.TelephoneService.rechercherpartype(this.IdType).
    subscribe((tele:any) => {
      this.telephones = tele;
      });
    }









}
