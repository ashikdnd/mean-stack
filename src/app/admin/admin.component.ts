import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        console.log(val.url)
        if (val.url == '/admin') {
          router.navigateByUrl('admin/add-product');
        } else {
          const route = val.url.split('/');
          this.activeMenu = route[route.length - 1];
        }
      }
    });
  }

  activeMenu: String = '';

  ngOnInit(): void {
  }

  selectMenu(type: string) {
    this.activeMenu = type;
  }

}
