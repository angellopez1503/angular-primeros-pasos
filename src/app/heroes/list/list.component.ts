import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public heroNames:string[]=['Spiderman','Ironman','Hulk','She Hulk','Thor']
  public deletedHero?:string


  removeLastaHero():void{
    this.deletedHero = this.heroNames.pop()
     
  }


  constructor() { }

  ngOnInit(): void {
  }

}
