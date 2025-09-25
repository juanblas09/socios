import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'socios-categorias',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  template: `
    <div class="page-container">
      <socios-page-header title="Categorías" subtitle="Gestión de categorías de socios" />
      <div class="content-body">
        <p>Gestión de categorías - En desarrollo</p>
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
export class CategoriasComponent {}