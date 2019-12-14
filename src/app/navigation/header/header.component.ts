import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavOpen=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  openSidenav(){

    this.sidenavOpen.emit();
    
  }

}
