import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { navbarRoutes } from '../../navbar.routes';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-side-nav-closed',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  template: `
  <mat-nav-list>
    <div class="profile-container">
      <img src="images/user.png" alt="Imagen de usuario"
          class="img mat-elevation-z3">
      <h4 class="name m-1">{{ name }}</h4>
      <h5 class="m-1">{{ title }}</h5>
    </div>
    <mat-divider class="m-3"></mat-divider>
    <a mat-list-item *ngFor="let item of routes" 
      [routerLink]="['/', item.path]"
      class="padding">
      <mat-icon color="primary">{{ item.data.icon }}</mat-icon>
      <span>{{ item.data.text }}</span>
    </a>
    <mat-divider class="m-3"></mat-divider>
    <a mat-list-item (click)="onLogoutClick()" class="padding">
      <mat-icon color="primary">{{ icon }}</mat-icon>
      <span>{{ text }}</span>
    </a>
    <mat-divider class="m-3"></mat-divider>
  </mat-nav-list>
  `,
  styles: `
  .img {
    width: 50px;
    height: 50px;
  }
  .padding {
    padding-left: 24px;
  }
  `
})
export class SideNavClosedComponent {
  name:string = 'J.C';
  title:string = 'Ing. T.I';
  icon:string = 'exit_to_app';
  text:string = 'Salir';
  routes = navbarRoutes;

  @Output() logout = new EventEmitter<void>();

  onLogoutClick(): void {
    this.logout.emit();
  }
}