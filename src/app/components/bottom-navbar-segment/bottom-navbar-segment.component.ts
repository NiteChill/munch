import { NgIf } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar-segment',
  standalone: true,
  imports: [NgIf],
  templateUrl: './bottom-navbar-segment.component.html',
  styleUrl: './bottom-navbar-segment.component.scss'
})
export class BottomNavbarSegmentComponent {
  @Input() icon: String = 'settings';
  @Input() label: String = '';
  @Input() active: boolean = false;
}
