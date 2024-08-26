import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Location, NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { Router, RouterOutlet } from '@angular/router';
import { IconButtonComponent } from '../../components/icon-button/icon-button.component';
import { FabComponent } from '../../components/fab/fab.component';
import { CustomTextFieldComponent } from '../../components/custom-text-field/custom-text-field.component';
import { createPageTransition } from '../../animations';

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
    CustomTextFieldComponent,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  animations: [createPageTransition],
})
export class CreateComponent {
  page: number = 0;

  data = {
    title: '',
    image: '',
    ingredients: [],
    instructions: [],
  };

  file: File | null = null;

  constructor(private location: Location, private router: Router) {}

  back() {
    this.location.back();
  }

  handleFile(e: Event) {
    this.file = (e.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onload = () => {
      this.data.image = reader.result as string;
    };
    reader.readAsDataURL(this.file);
  }

  handleInput(e: string) {
    this.data.title = e;
  }

  handleSubmit() {
    this.router.navigate(['/']);
  }
}
