/**
 * Core angular modules
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Root app routes to load child modules lazily - here we have to load only one child module
 */
const routes: Routes = [
  { path: '', redirectTo: 'template-project', pathMatch: 'full' },
  { path: 'template-project', loadChildren: '../modules/template-project.module#TemplateProjectModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
