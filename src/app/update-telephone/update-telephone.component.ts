import { telephone } from './../model/telephone.model';
import { TelephoneService } from './../services/telephone.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import{Type} from'../model/type.model';
@Component({
  selector: 'app-update',
  templateUrl: './update-telephone.component.html',

})
export class UpdateProduitComponent implements OnInit {
  currenttelephone = new telephone();
  types!:Type[];
upadatetypeid!:number;
  constructor(private activatedRoute: ActivatedRoute,private router :Router,private TelephoneService: TelephoneService){ }

    ngOnInit(): void {
      this.TelephoneService.listetype().
subscribe(typs => {this.types = typs._embedded.types;
console.log(typs);
});
this.TelephoneService.consultertelephone(this.activatedRoute.snapshot.params['id']).
subscribe( tele =>{ this.currenttelephone = tele;
this.upadatetypeid =
this.currenttelephone.type.idType;
} ) ;
    }

    updatetelephone() {
      this.currenttelephone.type = this.types.
      find(typ => typ.idType == this.upadatetypeid)!;
     this.TelephoneService.updatetelephone(this.currenttelephone).subscribe(tele=> {
     this.router.navigate(['Mestelephone']); }
     );
     }

    }


