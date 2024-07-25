import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { BottomNavbarComponent } from '../components/bottom-navbar/bottom-navbar.component';
import { pagesTransition } from '../routeTransition';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [NavbarComponent, BottomNavbarComponent, RouterOutlet],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
  animations: [pagesTransition],
})
export class PagesComponent {
  title: String = 'Munch';
  scroll: boolean = false;
  bottomElements: boolean = true;
  previousScroll: number = 0;
  currentUrl: string = '';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }

  constructor(protected route: ActivatedRoute) {}

  handleScroll(e: Event) {
    this.scroll = (e.target as HTMLElement).scrollTop > 0;
    this.bottomElements =
      (e.target as HTMLElement).scrollHeight -
        (e.target as HTMLElement).offsetHeight -
        (e.target as HTMLElement).scrollTop <
      80
        ? true
        : (e.target as HTMLElement).scrollTop - this.previousScroll < 0;

    this.previousScroll = (e.target as HTMLElement).scrollTop;
  }
}
