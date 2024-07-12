import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    class: 'button'
  }
})
export class ButtonComponent {
  @Input() label: String = 'Label';
  @Input() btnStyle: String = 'standard';
  @Input() disabled: boolean = false;
}
