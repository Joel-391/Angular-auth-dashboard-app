import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { TopNavComponent } from './navbar/top-nav/top-nav.component';
import { SideNavComponent } from './navbar/side-nav-left/side-nav/side-nav.component';
import { SideNavClosedComponent } from './navbar/side-nav-left/side-nav-closed/side-nav-closed.component';
import { FormComponent } from './auth/login/form/form.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterOutlet,
    TopNavComponent,
    SideNavComponent,
    SideNavClosedComponent,
    FormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular-auth-dashboard-app';
  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;
  @ViewChild('menuSidenav') sideNav!: MatSidenav;
  private mediaSub!:Subscription;
  sideNavMode: 'side' | 'over' = 'side';
  isMobile:boolean = false;
  hasBackdrop:boolean = false;
  show:boolean = false;
  showFullMenu:boolean = true;
  sideNavDefaultOpened:boolean = true;
  isExpanded:boolean = true;
  closedWidth:number = 90;
  openedWidth:number = 250;
  toolBarHeight:number = 0;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.mediaSub = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
      .subscribe((result) => {
        if (result.matches) {
          // Si es pantalla de móvil o tablet
          if (
            result.breakpoints[Breakpoints.HandsetPortrait] ||
            result.breakpoints[Breakpoints.TabletPortrait]
          ) {
            this.isMobile = true;
            this.sideNavDefaultOpened = false;
            this.isExpanded = false;
            this.sideNavMode = 'over';
            this.hasBackdrop = true;
            this.toolBarHeight = 0;
          } else {
            // Si es pantalla de laptop o computadora
            this.isMobile = false;
            this.sideNavDefaultOpened = true;
            this.sideNavMode = 'side';
            this.hasBackdrop = false;
            this.toolBarHeight = 0;
          }
        }
      });
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.show = true;
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy(): void {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

  onToolbarMenuToggle(): void {
    if (this.isMobile) {
      this.sideNav.toggle();
    } else {
      if (!this.isExpanded) {
        this.showFullMenu = true;
      } else {
        this.showFullMenu = false;
      }
    }
    this.isExpanded = !this.isExpanded;
  }

  onLoginSuccess(): void {
    localStorage.setItem('isLoggedIn', 'true');
    this.show = true;
    this.router.navigate(['/home']);
  }

  onLogout(): void {
    localStorage.removeItem('isLoggedIn');
    this.show = false;
    this.router.navigate(['/login']);
  }
}