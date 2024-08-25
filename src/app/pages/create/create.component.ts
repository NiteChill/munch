import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Location, NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterOutlet } from '@angular/router';
import { IconButtonComponent } from '../../components/icon-button/icon-button.component';
import { FabComponent } from '../../components/fab/fab.component';
import { CustomTextFieldComponent } from '../../components/custom-text-field/custom-text-field.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    NavbarComponent,
    NgIf,
    ButtonComponent,
    RouterOutlet,
    IconButtonComponent,
    FabComponent,
    CustomTextFieldComponent
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  page: number = 0;

  data = {
    title: '',
    image: '',
    ingredients: [],
    instructions: [],
  };

  scroll: boolean = false;

  constructor(private location: Location) {}
  back() {
    this.location.back();
  }

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

  handleInput(e: string) {

  }
}
