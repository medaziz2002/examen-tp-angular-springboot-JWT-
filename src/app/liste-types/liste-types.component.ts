import { Type } from './../model/type.model';
import { Component, OnInit } from "@angular/core";
import { TelephoneService } from "../services/telephone.service";


@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',

})
export class ListeTypesComponent implements OnInit {

updatedType:Type = {"idType":0,"nomtype":""};
ajout:boolean=true;
types!:Type[];

  constructor(private telephoneservice:TelephoneService) { }

  ngOnInit(): void {
  this.chargerTypes();
  }

  chargerTypes(){
    this.telephoneservice.listetype().
      subscribe(typs => {this.types = typs._embedded.types;
      console.log(typs);
    });
  }

  updateType(type:Type) {
    this.updatedType=type;
    this.ajout=false;
  }


  typeUpdated(type:Type){
    console.log("type updated event",type);
    this.telephoneservice.ajoutertype(type).subscribe( () =>  this.chargerTypes());
  }
  supprimerType(type : Type) {
    let conf = confirm("Etes-vous sûr ?");
       if (conf)
       {
         this.telephoneservice.supprimerType(type.idType).subscribe(() => {
          console.log("Catégorie supprimée");
          this.chargerTypes(); }  );
       }
  }








}
