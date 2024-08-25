import { Component, Input } from '@angular/core';
import { IconButtonComponent } from '../../components/icon-button/icon-button.component';
import { FabComponent } from '../../components/fab/fab.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [IconButtonComponent, FabComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
}
