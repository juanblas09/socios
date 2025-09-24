import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { authorizedGuard } from './guards/authorized.guard';
import { adminGuard } from './guards/admin.guard';

export const ROUTE_TREE = {
	DASHBOARD: 'dashboard',
	UNAUTHORIZED: 'unauthorized'
};

export const appRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: ROUTE_TREE.DASHBOARD,
				loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
				canActivate: [adminGuard],
			},
			{
				path: '',
				redirectTo: ROUTE_TREE.DASHBOARD,
				pathMatch: 'full',
			},
		],
		canActivate: [authGuard, authorizedGuard],
	},
	{
		path: ROUTE_TREE.UNAUTHORIZED,
		loadComponent: () => import('./pages/unauthorized/unauthorized.component').then((m) => m.UnauthorizedComponent),
		pathMatch: 'full',

	},
	{
		path: '**',
		redirectTo: ROUTE_TREE.DASHBOARD,
		pathMatch: 'full',
	},
];
