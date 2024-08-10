import { Component, Input } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [IconButtonComponent],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() instruction: String = 'Label';
  @Input() time: String = "0 minutes";
}
