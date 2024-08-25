import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input() icon: string = 'settings';
  @Input() btnStyle: string = 'standard';
  @Input() active: boolean = false;
  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
