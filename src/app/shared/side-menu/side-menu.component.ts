import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  imports: [CommonModule, RouterModule],
  styleUrl: './side-menu.component.css',
  standalone:true
})
export class SideMenuComponent {

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter( route => route && route.path)
    .filter( route => !route.path?.includes(':'))




  constructor(){
    // const dashBoardRoutes = routes
    // .map(route => route.children ?? [])
    // .flat()
    // .filter( route => route && route.path)
    // .filter( route => !route.path?.includes(':'))


    // console.log(dashBoardRoutes);
  }
}
