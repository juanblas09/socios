import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'
import { ROUTE_TREE } from '../../app.routes'

// Services

@Component({
	selector: 'socios-dashboard',
	standalone: true,
	imports: [ CommonModule, RouterLink ],
	template: `
		Bienvenidx al dashboard

	`,
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

	appRoute = ROUTE_TREE;

}
