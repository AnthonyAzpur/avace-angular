import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.componet.html'
})

export class MainPageComponet {
  public Character : Character[] = [{
    name:'krilin',
    power:1000
  },{
    name:'goku',
    power: 9500

  },{
    name:'vegeta',
    power: 7000

  }
];

onNewCharacter(Character : Character): void {
  console.log('MainPage');
  console.log(Character)

}

}
