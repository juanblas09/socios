import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideUsers,
  lucideCreditCard,
  lucideCalendar,
  lucideTag,
  lucideChartBar,
  lucideUserCog,
  lucideTrendingUp,
  lucideEye
} from '@ng-icons/lucide';

interface DashboardStat {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  color: string;
}

interface QuickAction {
  title: string;
  description: string;
  route: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'socios-dashboard-home',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      lucideUsers,
      lucideCreditCard,
      lucideCalendar,
      lucideTag,
      lucideChartBar,
      lucideUserCog,
      lucideTrendingUp,
      lucideEye
    })
  ],
  template: `
    <div class="min-h-screen bg-base-200">
      <socios-page-header
        title="Dashboard"
        subtitle="Panel de control - Gestión de Socios"
      />

      <div class="p-6 space-y-6">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          @for (stat of dashboardStats; track stat.title) {
            <div class="stats shadow bg-white">
              <div class="stat">
                <div class="stat-figure" [class]="'text-' + stat.color">
                  <ng-icon [name]="stat.icon" class="w-8 h-8"></ng-icon>
                </div>
                <div class="stat-title text-base-content/70">{{ stat.title }}</div>
                <div class="stat-value" [class]="'text-' + stat.color">{{ stat.value }}</div>
                <div class="stat-desc" [class]="stat.trend === 'up' ? 'text-success' : 'text-error'">
                  <ng-icon name="lucideTrendingUp" class="w-4 h-4 inline mr-1"></ng-icon>
                  {{ stat.change }}
                </div>
              </div>
            </div>
          }
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Quick Actions -->
          <div class="lg:col-span-2">
            <div class="card bg-white shadow">
              <div class="card-body">
                <h2 class="card-title text-base-content">
                  <ng-icon name="lucideEye" class="w-5 h-5"></ng-icon>
                  Acciones Rápidas
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  @for (action of quickActions; track action.title) {
                    <div class="card bg-base-100 border hover:shadow-md transition-shadow">
                      <div class="card-body p-4">
                        <div class="flex items-start gap-3">
                          <div class="rounded-lg p-2" [class]="'bg-' + action.color + '/10'">
                            <ng-icon
                              [name]="action.icon"
                              class="w-5 h-5"
                              [class]="'text-' + action.color"
                            ></ng-icon>
                          </div>
                          <div class="flex-1">
                            <h3 class="font-semibold text-base-content">{{ action.title }}</h3>
                            <p class="text-sm text-base-content/70 mt-1">{{ action.description }}</p>
                            <a
                              [routerLink]="action.route"
                              class="btn btn-sm mt-3"
                              [class]="'btn-' + action.color"
                            >
                              Ir a {{ action.title }}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="lg:col-span-1">
            <div class="card bg-white shadow">
              <div class="card-body">
                <h2 class="card-title text-base-content">Actividad Reciente</h2>
                <div class="space-y-3 mt-4">
                  @for (activity of recentActivities; track activity.id) {
                    <div class="flex items-start gap-3">
                      <div class="badge badge-primary badge-sm flex-shrink-0 mt-1"></div>
                      <div class="flex-1">
                        <p class="text-sm text-base-content">{{ activity.description }}</p>
                        <p class="text-xs text-base-content/50 mt-1">{{ activity.time }}</p>
                      </div>
                    </div>
                  }
                </div>
                <div class="card-actions justify-end mt-4">
                  <button class="btn btn-ghost btn-sm">Ver todo</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Welcome Message -->
        <div class="alert alert-info">
          <ng-icon name="lucideUsers" class="w-5 h-5"></ng-icon>
          <span>¡Bienvenido al sistema de gestión de socios! Aquí puedes administrar miembros, pagos, cuotas y generar reportes.</span>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class DashboardHomeComponent {
  dashboardStats: DashboardStat[] = [
    {
      title: 'Total Socios',
      value: '1,234',
      change: '+12% desde el mes pasado',
      trend: 'up',
      icon: 'lucideUsers',
      color: 'primary'
    },
    {
      title: 'Pagos Pendientes',
      value: '$45,678',
      change: '-8% desde la semana pasada',
      trend: 'down',
      icon: 'lucideCreditCard',
      color: 'warning'
    },
    {
      title: 'Cuotas Vencidas',
      value: '23',
      change: '+5% desde ayer',
      trend: 'up',
      icon: 'lucideCalendar',
      color: 'error'
    },
    {
      title: 'Ingresos del Mes',
      value: '$98,765',
      change: '+15% vs mes anterior',
      trend: 'up',
      icon: 'lucideChartBar',
      color: 'success'
    }
  ];

  quickActions: QuickAction[] = [
    {
      title: 'Socios',
      description: 'Gestionar miembros y registros',
      route: '/dashboard/socios',
      icon: 'lucideUsers',
      color: 'primary'
    },
    {
      title: 'Pagos',
      description: 'Procesar pagos y facturación',
      route: '/dashboard/pagos',
      icon: 'lucideCreditCard',
      color: 'success'
    },
    {
      title: 'Cuotas',
      description: 'Administrar cuotas mensuales',
      route: '/dashboard/cuotas',
      icon: 'lucideCalendar',
      color: 'info'
    },
    {
      title: 'Reportes',
      description: 'Generar análisis y reportes',
      route: '/dashboard/reportes',
      icon: 'lucideChartBar',
      color: 'secondary'
    }
  ];

  recentActivities = [
    { id: 1, description: 'Nuevo socio registrado: Juan Pérez', time: 'Hace 2 horas' },
    { id: 2, description: 'Pago procesado: $500 - María González', time: 'Hace 4 horas' },
    { id: 3, description: 'Cuota vencida: Carlos Rodríguez', time: 'Hace 1 día' },
    { id: 4, description: 'Reporte generado: Ingresos Mensual', time: 'Hace 2 días' },
    { id: 5, description: 'Actualización de categoría: Premium', time: 'Hace 3 días' }
  ];
}