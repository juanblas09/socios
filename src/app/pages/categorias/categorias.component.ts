import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'socios-categorias',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h2 class="page-title">Categorías</h2>
      <p>Gestión de categorías - En desarrollo</p>
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
export class CategoriasComponent {}