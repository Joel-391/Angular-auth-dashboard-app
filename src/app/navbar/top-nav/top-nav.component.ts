import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  template: `
  <mat-toolbar color="primary">
    <button mat-icon-button (click)="toggleSidebar()">
      <mat-icon>{{icon}}</mat-icon>
    </button>
    <span>{{title}}</span>
  </mat-toolbar>
  `,
  styles: ``
})
export class TopNavComponent {
  icon:string = 'menu';
  title:string = 'Auth Dashboard';
  @Output() sideNavToggled = new EventEmitter<void>();

  toggleSidebar(): void {
    this.sideNavToggled.emit();
  };
};