import { TelephoneService } from './../services/telephone.service';
import { AuthService } from './../services/auth.service';

import { telephone } from './../model/telephone.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mestelephones',
  templateUrl: './mestelephones.component.html',
  styleUrls: ['./mestelephones.component.css']
})
export class MestelephonesComponent implements OnInit {
  //telephone: string[];
  telephone!: telephone[];

  constructor(private telephoneService:TelephoneService,public AuthService:AuthService)
  {

  }
  ngOnInit(): void {
this.telephoneService.listetelephones().subscribe(tele=>{
  console.log(tele);
  this.telephone=tele;
});
  }
  supprimertelephone(p: telephone)
  {

  let conf = confirm("Etes-vous sûr ?");
    if (conf)
  this.telephoneService.supprimertelephone(p.idTelephone).subscribe(()=>{
  console.log("Telephone supprimé");
        this.SuprimerTelephoneDuTableau(p);
      });
}
SuprimerTelephoneDuTableau(tele : telephone) {
  this.telephone.forEach((cur, index) => {
  if(tele.idTelephone=== cur.idTelephone) {
  this.telephone.splice(index, 1);
  }
  });
  }




  }
