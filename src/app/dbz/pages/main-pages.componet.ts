import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.componet.html'
})

export class MainPageComponet {

constructor(private dbzService : DbzService){}

get Characters(): Character[] {
  return [...this.dbzService.Characters];
}

onDeleteCharacter( id : string) : void{
  this.dbzService.deleteCharacterbyid( id );
}
onNewCharacter ( Character : Character){
  this.dbzService.addCharacter(Character ) ;
}


}
