import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    class: 'button'
  }
})
export class ButtonComponent {
  @Input() icon: String = '';
  @Input() label: String = 'Label';
  @Input() btnStyle: String = 'standard';
  @Input() disabled: boolean = false;
  @Input() width: String = 'auto';
}
