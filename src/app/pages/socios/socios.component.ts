import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideSearch,
  lucidePlus,
  lucideUsers,
  lucideUserCheck,
  lucideUserX,
  lucideCrown,
  lucideMoveVertical,
  lucideEye,
  lucidePencil,
  lucideCreditCard,
  lucideTrash2
} from '@ng-icons/lucide';

interface SocioStat {
  label: string;
  value: string;
  description: string;
  icon: string;
  color: string;
}

interface Member {
  id: number;
  name: string;
  email: string;
  memberNumber: string;
  category: string;
  categoryColor: string;
  status: string;
  statusColor: string;
  lastPayment: string;
  avatar: string;
}

@Component({
  selector: 'socios-socios',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      lucideSearch,
      lucidePlus,
      lucideUsers,
      lucideUserCheck,
      lucideUserX,
      lucideCrown,
      lucideMoveVertical,
      lucideEye,
      lucidePencil,
      lucideCreditCard,
      lucideTrash2
    })
  ],
  templateUrl: './socios.component.html',
  styleUrl: './socios.component.scss'
})
export class SociosComponent {
  sociosStats: SocioStat[] = [
    {
      label: 'Total Socios',
      value: '1,234',
      description: 'Miembros registrados',
      icon: 'lucideUsers',
      color: 'primary'
    },
    {
      label: 'Socios Activos',
      value: '1,156',
      description: 'Al día con pagos',
      icon: 'lucideUserCheck',
      color: 'success'
    },
    {
      label: 'Socios Inactivos',
      value: '78',
      description: 'Con pagos vencidos',
      icon: 'lucideUserX',
      color: 'error'
    },
    {
      label: 'Socios Premium',
      value: '234',
      description: 'Membresía premium',
      icon: 'lucideCrown',
      color: 'warning'
    }
  ];

  mockMembers: Member[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@email.com',
      memberNumber: '#S001',
      category: 'Premium',
      categoryColor: 'warning',
      status: 'Activo',
      statusColor: 'success',
      lastPayment: '15/12/2024',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan'
    },
    {
      id: 2,
      name: 'María González',
      email: 'maria.gonzalez@email.com',
      memberNumber: '#S002',
      category: 'Básico',
      categoryColor: 'info',
      status: 'Activo',
      statusColor: 'success',
      lastPayment: '10/12/2024',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria'
    },
    {
      id: 3,
      name: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@email.com',
      memberNumber: '#S003',
      category: 'Estándar',
      categoryColor: 'primary',
      status: 'Vencido',
      statusColor: 'error',
      lastPayment: '25/11/2024',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos'
    },
    {
      id: 4,
      name: 'Ana Martínez',
      email: 'ana.martinez@email.com',
      memberNumber: '#S004',
      category: 'Premium',
      categoryColor: 'warning',
      status: 'Activo',
      statusColor: 'success',
      lastPayment: '20/12/2024',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana'
    },
    {
      id: 5,
      name: 'Luis Fernández',
      email: 'luis.fernandez@email.com',
      memberNumber: '#S005',
      category: 'Básico',
      categoryColor: 'info',
      status: 'Pendiente',
      statusColor: 'warning',
      lastPayment: '05/12/2024',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luis'
    }
  ];
}
