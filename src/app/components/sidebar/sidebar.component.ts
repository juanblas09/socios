import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
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
  sidebarItems: SidebarItem[] = [
    { label: 'Socios', route: '/dashboard/socios', icon: 'lucideUsers' },
    { label: 'Pagos', route: '/dashboard/pagos', icon: 'lucideCreditCard' },
    { label: 'Cuotas', route: '/dashboard/cuotas', icon: 'lucideCalendar' },
    { label: 'Categorías', route: '/dashboard/categorias', icon: 'lucideTag' },
    { label: 'Reportes', route: '/dashboard/reportes', icon: 'lucideChartBar' },
    { label: 'Usuarios', route: '/dashboard/usuarios', icon: 'lucideUserCog' }
  ];
}
