import { Routes } from '@angular/router';

import {
  AuthGuard,
  AuthLoginGuard,
} from './auth';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthLoginGuard],
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
