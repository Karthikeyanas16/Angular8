import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  DepScreen = true;  // put the default values 
  EmpScreen = false;
  TechScreen = false;

  onScreenSelect(){
     this.DepScreen = !this.DepScreen; // at any point in time only one screen is visible
     this.EmpScreen = !this.EmpScreen;
  }
}