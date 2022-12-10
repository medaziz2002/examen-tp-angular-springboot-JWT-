import { TelephoneService } from './../services/telephone.service';
import { telephone } from './../model/telephone.model';
import { Component, OnInit } from '@angular/core';
import{Type} from '../model/type.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-telephone',
  templateUrl: './add-telephone.component.html',
  styleUrls: ['./add-telephone.component.css']
})
export class AddTelephoneComponent implements OnInit {

  newtelephone =new telephone();
  types!:Type[];
  newIdTel!:number;
  newType!:Type;
  constructor(private TelephoneService:TelephoneService,private router:Router) { }

  ngOnInit(): void {
    this.TelephoneService.listetype().subscribe(typs=>{this.types=typs._embedded.types; console.log(typs);});
  }

  addTelephone(){
    this.newtelephone.type = this.types.find(ty => ty.idType == this.newIdTel)!;
    this.TelephoneService.ajoutertelephone(this.newtelephone)
    .subscribe(tele => {
    console.log(tele);
    this.router.navigate(['Mestelephone']);
    });


    }



}
