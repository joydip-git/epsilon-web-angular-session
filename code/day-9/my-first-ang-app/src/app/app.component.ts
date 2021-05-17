import { Component } from '@angular/core';


//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Welcome to Angular';
  constructor() {
  }
}
// export class AppComponent {
//   appTitle = 'Welcome to Angular';
//   margin = 2;
//   width = 50;
//   color = 'burlywood'
//   id = 'boolDiv'
//   constructor() { }
//   show(arg: any) {
//     alert(arg)
//   }
// }
