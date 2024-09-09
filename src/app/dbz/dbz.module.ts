import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponet } from './pages/main-pages.componet';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponet,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponet
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
