import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router'
import { ROUTE_TREE } from '../../app.routes'

// Components
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

// Services
import { MemberService } from "../../providers/member.service";
import {switchMap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
	selector: 'socios-dashboard',
	standalone: true,
	imports: [ CommonModule, RouterLink, RouterOutlet, SidebarComponent ],
	template: `
		<div class="dashboard-layout">
			<socios-sidebar></socios-sidebar>

			<router-outlet></router-outlet>
		</div>
	`,
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

}
