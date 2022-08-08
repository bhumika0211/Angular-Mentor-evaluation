import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  collapsed= true;
  navData=navbarData;

  constructor() { }

  ngOnInit(): void {
  }

}
