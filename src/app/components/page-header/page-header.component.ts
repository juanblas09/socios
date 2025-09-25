import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'socios-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <div class="page-header-content">
        <h1 class="page-title">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="page-subtitle">{{ subtitle() }}</p>
        }
      </div>
    </div>
  `,
  styles: `
    .page-header {
      @apply w-full bg-white border-b-1 border-gray-200 px-6 py-4;
    }

    .page-header-content {
      @apply max-w-full;
    }

    .page-title {
      @apply text-2xl font-bold text-gray-900 mb-0;
    }

    .page-subtitle {
      @apply text-sm text-gray-600 mt-1;
    }
  `
})
export class PageHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>();
}