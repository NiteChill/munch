import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fab',
  standalone: true,
  imports: [],
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.scss',
})
export class FabComponent {
  @Input() icon: string = 'add';
  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
