import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'socios-usuarios',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h2 class="page-title">Usuarios</h2>
      <p>Gestión de usuarios - En desarrollo</p>
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