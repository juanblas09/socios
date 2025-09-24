import { Component, inject, input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { User } from '../../interfaces/user.interface';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'socios-header',
	standalone: true,
	imports: [CommonModule, LogoutButtonComponent, RouterModule],
	template: `
		<header class="bg-primary-dark text-white">
			<div class="mx-5 max-w-screen-lg px-4 py-3 sm:px-6 md:max-w-screen-lg lg:px-8">
				<div class="flex items-center justify-between">
					<a [routerLink]="['']" class="flex-shrink-0">
						<h1 class="text-xl sm:text-2xl font-bold">GESTIÓN DE SOCIOS</h1>
					</a>
					<div class="flex items-center gap-4">
						@if (user()) {
							<span class="text-sm sm:text-base">Hola, {{ user().firstName }}!</span>
						}
						@if (isPlatformBrowser) {
							<socios-logout-button />
						}
					</div>
				</div>
			</div>
		</header>
	`,
	styles: ``,
})
export class HeaderComponent {
	user = input.required<User>();
	isPlatformBrowser = isPlatformBrowser(inject(PLATFORM_ID));
}
