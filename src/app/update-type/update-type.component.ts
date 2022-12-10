import { Type } from './../model/type.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',

})
export class UpdateTypeComponent implements OnInit {

  @Input()
  type! : Type;


  @Input()
  ajout!:boolean;

  @Output()
  typeUpdated = new EventEmitter<Type>();
  constructor() { }

  ngOnInit(): void {

  }
saveType()
{
  this.typeUpdated.emit(this.type);
}

modeAjout()
{
  this.ajout=true;
  this.type.idType= 0;
  this.type.nomtype="";
}


}
