import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { routeTransition } from './routeTransition';
const theme: string = 'light';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BottomNavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', `./assets/theme/${theme}.css`],
  animations: [routeTransition],
})
export class AppComponent {
  title: String = 'Munch';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }

  constructor(protected route: ActivatedRoute) {}
}
