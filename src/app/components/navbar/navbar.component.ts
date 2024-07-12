import { Component, Input } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Location, NgIf } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    IconButtonComponent,
    RouterLink,
    RouterLinkActive,
    NgIf,
    IconButtonComponent,
    ButtonComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() title: string = '';
  @Input() scroll: boolean = false;
  @Input() page: String = '';
  @Input() form = {
    title: '',
    image: '',
    ingredients: [''],
    instructions: [''],
  };

  constructor(private location: Location) {}
  back() {
    this.location.back();
  }
}