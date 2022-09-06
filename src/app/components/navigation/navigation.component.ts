import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  darkMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode(){
    this.toggleDarkMode!;
    document.body.classList.toggle('dark');
  }
}
