import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDelete : EventEmitter<string>= new EventEmitter();


  onDeleteCharacter(id:string):void{
    //Emitir el ID del personaje

    console.log({id});
    this.onDelete.emit(id)
  }



  constructor() {}

  ngOnInit(): void {}
}
