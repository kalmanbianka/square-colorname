import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss']
})
export class SquaresComponent implements OnInit {
  title: string = "Nyomj meg egy négyzetet!";
  
  constructor() { }

  ngOnInit() {
  }
  
  onAddBlue(){
    this.title = 'Kék négyzet';
  }
  onAddPink(){
    this.title = 'Rózsaszín négyzet';
  }
  onAddGreen(){
    this.title = 'Zöld négyzet';
  }
  onAddYellow(){
    this.title = 'Sárga négyzet';
  }
}
