import { Component, Input } from '@angular/core';
import { BottomNavbarSegmentComponent } from '../bottom-navbar-segment/bottom-navbar-segment.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [BottomNavbarSegmentComponent, RouterLink, RouterLinkActive],
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.scss'
})
export class BottomNavbarComponent {
}
