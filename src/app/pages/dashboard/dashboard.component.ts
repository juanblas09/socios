import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'
import { ROUTE_TREE } from '../../app.routes'

// Services
import { MemberService } from "../../providers/member.service";
import {switchMap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
	selector: 'socios-dashboard',
	standalone: true,
	imports: [ CommonModule, RouterLink ],
	template: `
		Bienvenidx al dashboard

		@for (member of members$ | async; track member.id) {
			<div>
				{{ member.lastName }}
			</div>
		}

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
