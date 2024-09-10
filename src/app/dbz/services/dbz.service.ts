import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';




@Injectable({
  providedIn: 'root'

})
export class DbzService {

  public Characters : Character[] = [{
    id: uuid(),
    name:'krilin',
    power:1000
  },{
    id: uuid(),
    name:'goku',
    power: 9500

  },{
    id: uuid(),
    name:'vegeta',
    power: 7000

  }
];

addCharacter(Character : Character): void {
  const newCharacter: Character={
    id: uuid(),
    name: Character.name,
    power:Character.power
  }

  this.Characters.push(newCharacter);
}


//onDeleteCharacter(index : number){
//  this.Characters.splice(index,1);}

deleteCharacterbyid (id: string){
  this.Characters = this.Characters.filter(Characters => Characters.id !== id );
}

}
