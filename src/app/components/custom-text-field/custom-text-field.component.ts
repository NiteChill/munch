import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-custom-text-field',
  standalone: true,
  imports: [IconButtonComponent, NgIf],
  templateUrl: './custom-text-field.component.html',
  styleUrl: './custom-text-field.component.scss'
})
export class CustomTextFieldComponent {
  @Input() label: String = 'Label';
  @Input() input: String = '';
  @Output() output = new EventEmitter<string>();
  @Input() trailingIcon: String = 'cancel';
  @ViewChild('customTextField') customTextField!: ElementRef;

  handleInput(e: Event) {
    this.input = (e.target as HTMLInputElement).value;
    this.output.emit((e.target as HTMLInputElement).value);
  }

  handleClear() {
    this.customTextField.nativeElement.value = '';
    this.input = '';
    this.output.emit('');
  }
}
