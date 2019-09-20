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
  
  setTitleByColor(color:string){
    this.title = color;
  }
}
