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

			<main class="dashboard-content">
				<div class="content-header">
					<h1 class="page-title">Dashboard</h1>
				</div>

				<div class="content-body">
					<div class="welcome-message">
						Bienvenidx al dashboard
					</div>

					<div class="members-section">
						<h2>Miembros</h2>
						@for (member of members$ | async; track member.id) {
							<div class="member-card">
								{{ member.lastName }}
							</div>
						}
					</div>

					<router-outlet></router-outlet>
				</div>
			</main>
		</div>
	`,
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

	appRoute = ROUTE_TREE;

	private memberService = inject(MemberService);

	// Get all members
	members$ = this.memberService.getAll()
		.pipe(
			switchMap(members => {
				console.log(members);
				return [members];
			}),
			takeUntilDestroyed()
		)
}
