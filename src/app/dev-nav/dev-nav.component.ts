import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dev-nav',
  templateUrl: './dev-nav.component.html',
  styleUrls: ['./dev-nav.component.css']
})
export class DevNavComponent {

  constructor(
    private router: Router
    ) { }

  seeSplash(): void {
    this.router.navigate(['/splash']);
  }

  seeDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

}
