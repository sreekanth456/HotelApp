import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {


  @Output() closeSidenavbar= new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onToggleClose(){

    this.closeSidenavbar.emit();

  }

}
