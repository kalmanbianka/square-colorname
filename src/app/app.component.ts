import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Nyomj meg egy négyzetet!";
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

