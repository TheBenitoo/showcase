import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/core/interfaces/navItem';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  darkMode: boolean = false;
  navigationItems: NavItem[] = [
    {link: "", name: "Home"},
    {link: "imdb", name: "IMDb"},
    {link: "imdb", name: "IMDb"},
  ];

  constructor() {}

  ngOnInit(): void {
  }

  toggleDarkMode(){
    this.toggleDarkMode!;
    document.body.classList.toggle('dark');
  }
}
