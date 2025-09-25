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
  lucideUserCog,
  lucideHouse,
  lucideInfo
} from '@ng-icons/lucide';

interface SidebarItem {
  label: string;
  route: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
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
      lucideUserCog,
      lucideHouse,
      lucideInfo
    })
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);

  mainMenuItems: SidebarItem[] = [
    { label: 'Socios', route: '/dashboard/socios', icon: 'lucideUsers', badge: '1,234', badgeColor: 'primary' },
    { label: 'Pagos', route: '/dashboard/pagos', icon: 'lucideCreditCard', badge: 'Nuevo', badgeColor: 'success' },
    { label: 'Cuotas', route: '/dashboard/cuotas', icon: 'lucideCalendar', badge: '23', badgeColor: 'warning' }
  ];

  adminMenuItems: SidebarItem[] = [
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
