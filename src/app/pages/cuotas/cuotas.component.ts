import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'socios-cuotas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h2 class="page-title">Cuotas</h2>
      <p>Gestión de cuotas - En desarrollo</p>
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
export class CuotasComponent {}