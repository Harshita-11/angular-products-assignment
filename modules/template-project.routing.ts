/**
 * Core angular modules
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Application component imports
 */
import { SearchProductListComponent } from './search-product-list.component';

/**
 * Module child routes
 */
const routes: Routes = [
  { path: '', component: SearchProductListComponent }
];

/**
 * This is child module router which will be loaded lazily in root application
 */
export const TemplateProjectRouting: ModuleWithProviders = RouterModule.forChild(routes);
