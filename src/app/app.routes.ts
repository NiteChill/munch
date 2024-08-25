import { Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { animationState: 'main' },
  },
  {
    path: 'create',
    component: CreateComponent,
    data: { animationState: 'create' },
  },
  { path: '**', redirectTo: 'pages/home', pathMatch: 'full' },
];
