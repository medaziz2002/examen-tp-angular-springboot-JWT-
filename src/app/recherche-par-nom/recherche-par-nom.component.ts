import { TelephoneService } from './../services/telephone.service';
import { telephone } from './../model/telephone.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',

})
export class RechercheParNomComponent implements OnInit {
telephones!:telephone[];
  searchTerm!:string;
  nomtelephone!:string;
  alltelephones!:telephone[];
  constructor(private telephoneservice:TelephoneService) { }

  ngOnInit(): void {

      this.telephoneservice.listetelephones().subscribe(tele => {
      console.log(tele);
      this.alltelephones = tele;
      });

  }

  onChange(){
    this.telephoneservice.rechercherparnom(this.nomtelephone).subscribe(tele => {
      console.log(tele);
      this.telephones = tele;
      });
  }

  onKeyUp(filterText : string){
    this.telephones = this.alltelephones.filter(item =>
    item.nomTelephone.toLowerCase().includes(filterText));
    }


}









