import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SavedComponent } from './pages/saved/saved.component';
import { GroceriesComponent } from './pages/groceries/groceries.component';
import { CreateComponent } from './pages/create/create.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    data: { animationState: 'pages' },
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { animationState: 'home' },
      },
      {
        path: 'saved',
        component: SavedComponent,
        data: { animationState: 'saved' },
      },
      {
        path: 'groceries',
        component: GroceriesComponent,
        data: { animationState: 'groceries' },
      },
    ],
  },
  {
    path: 'create',
    component: CreateComponent,
    data: { animationState: 'create' },
  },
  { path: '**', redirectTo: 'pages/home', pathMatch: 'full' },
];
