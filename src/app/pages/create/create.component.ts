import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [NavbarComponent, NgIf, ButtonComponent, RouterOutlet],
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
