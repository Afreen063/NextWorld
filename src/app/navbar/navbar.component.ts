import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  onNavItemClicked(route: string): void {
    console.log(`Navigation item clicked: ${route}`);
    this.router.navigate([route]);
    // You can add additional logic here, such as tracking, analytics, etc.
  }
}
