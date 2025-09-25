import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { authorizedGuard } from './guards/authorized.guard';
import { adminGuard } from './guards/admin.guard';

export const ROUTE_TREE = {
	DASHBOARD: 'dashboard',
	SOCIOS: 'dashboard/socios',
	PAGOS: 'dashboard/pagos',
	CUOTAS: 'dashboard/cuotas',
	CATEGORIAS: 'dashboard/categorias',
	REPORTES: 'dashboard/reportes',
	USUARIOS: 'dashboard/usuarios',
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
				children: [
					{
						path: '',
						loadComponent: () => import('./pages/dashboard-home/dashboard-home.component').then((m) => m.DashboardHomeComponent),
					},
					{
						path: 'socios',
						loadComponent: () => import('./pages/socios/socios.component').then((m) => m.SociosComponent),
					},
					{
						path: 'pagos',
						loadComponent: () => import('./pages/pagos/pagos.component').then((m) => m.PagosComponent),
					},
					{
						path: 'cuotas',
						loadComponent: () => import('./pages/cuotas/cuotas.component').then((m) => m.CuotasComponent),
					},
					{
						path: 'categorias',
						loadComponent: () => import('./pages/categorias/categorias.component').then((m) => m.CategoriasComponent),
					},
					{
						path: 'reportes',
						loadComponent: () => import('./pages/reportes/reportes.component').then((m) => m.ReportesComponent),
					},
					{
						path: 'usuarios',
						loadComponent: () => import('./pages/usuarios/usuarios.component').then((m) => m.UsuariosComponent),
					},
				]
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
