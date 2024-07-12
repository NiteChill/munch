import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [IconButtonComponent, NgIf],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
  @Input() label: String = 'Label';
  input: String = '';
  @Output() output = new EventEmitter<string>();
  @Input() trailingIcon: String = 'cancel';
  @Input() supportingText: String = '';
  state = 'empty';

  handleInput(e: Event) {
    this.input = (e.target as HTMLInputElement).value;
    this.output.emit((e.target as HTMLInputElement).value);
  }
}
