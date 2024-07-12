import { Component, input } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TextFieldComponent } from '../../components/text-field/text-field.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [NavbarComponent, TextFieldComponent, NgIf],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  data = {
    title: '',
    image: '',
    ingredients: [],
    instructions: [],
  };

  handleFile(e: Event) {
    const file = (e.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onload = () => {
      this.data.image = reader.result as string;
      console.log(this.data);
    };
    reader.readAsDataURL(file);
  }
}
