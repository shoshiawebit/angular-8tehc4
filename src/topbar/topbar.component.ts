import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() displaySidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  checkbox:boolean=true;

  check(){
    this.displaySidebar.emit(
     this.checkbox
    );
  }
}