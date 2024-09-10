import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public CharacterList: Character[] = [{
    name:'trunks',
    power: 10
  }]


  @Output()
    oneDelete: EventEmitter <string> = new EventEmitter();

  oneDeleteCharacter(id?: string): void{

    if (!id ) return;
    

    this.oneDelete.emit(id );

  }

}
