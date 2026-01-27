import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'services',
    title: 'Services',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'projects',
    title: 'Projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
];
