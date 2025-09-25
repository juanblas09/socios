import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { SidebarService } from '../../services/sidebar.service';
import {
  lucideUsers,
  lucideCreditCard,
  lucideCalendar,
  lucideTag,
  lucideChartBar,
  lucideUserCog
} from '@ng-icons/lucide';

interface SidebarItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'socios-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [
    provideIcons({
      lucideUsers,
      lucideCreditCard,
      lucideCalendar,
      lucideTag,
      lucideChartBar,
      lucideUserCog
    })
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);

  sidebarItems: SidebarItem[] = [
    { label: 'Socios', route: '/dashboard/socios', icon: 'lucideUsers' },
    { label: 'Pagos', route: '/dashboard/pagos', icon: 'lucideCreditCard' },
    { label: 'Cuotas', route: '/dashboard/cuotas', icon: 'lucideCalendar' },
    { label: 'Categorías', route: '/dashboard/categorias', icon: 'lucideTag' },
    { label: 'Reportes', route: '/dashboard/reportes', icon: 'lucideChartBar' },
    { label: 'Usuarios', route: '/dashboard/usuarios', icon: 'lucideUserCog' }
  ];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('[aria-label="Toggle menu"]');

    if (this.sidebarService.isOpen() &&
        !sidebar?.contains(target) &&
        !toggleButton?.contains(target)) {
      this.sidebarService.close();
    }
  }

  onNavLinkClick() {
    // Close sidebar on mobile when navigating
    if (window.innerWidth < 768) {
      this.sidebarService.close();
    }
  }
}
