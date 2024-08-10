import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TextFieldComponent } from '../../components/text-field/text-field.component';
import { NgIf } from '@angular/common';
import { ListItemComponent } from '../../components/list-item/list-item.component';
import { ChipComponent } from '../../components/chip/chip.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [NavbarComponent, TextFieldComponent, NgIf, ListItemComponent, ChipComponent, ButtonComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  data = {
    title: '',
    image: '',
    ingredients: [''],
    instructions: [''],
  };
  scroll: boolean = false;

  handleFile(e: Event) {
    const file = (e.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onload = () => {
      this.data.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  handleScroll(e: Event) {
    this.scroll = (e.target as HTMLElement).scrollTop > 0;
  }
}
