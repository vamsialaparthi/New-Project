import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/page', title: 'Page',  icon:'person', class: '' },
    { path: '/component', title: 'Component',  icon:'content_paste', class: '' },
    { path: '/timeline', title: 'Timeline',  icon:'library_books', class: '' },
    { path: '/gallery', title: 'Gallery',  icon:'bubble_chart', class: '' },
    { path: '/inbox', title: 'Inbox',  icon:'location_on', class: '' },
    { path: 'emailtemplate', title: 'Email Template',  icon:'notifications', class: '' },
    { path: '/multilevelmenu', title: 'Multi-level menu',  icon:'unarchive', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
