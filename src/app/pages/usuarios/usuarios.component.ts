import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'socios-usuarios',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  template: `
    <div class="page-container">
      <socios-page-header title="Usuarios" subtitle="Administración de usuarios del sistema" />
      <div class="content-body">
        <p>Gestión de usuarios - En desarrollo</p>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      @apply p-6;
    }
    .page-title {
      @apply text-2xl font-bold text-gray-900 mb-4;
    }
  `]
})
export class UsuariosComponent {}