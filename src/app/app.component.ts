import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular'; 
 
  display: boolean=true
  displaySidebar(val){
    this.display=val;
  }
}
