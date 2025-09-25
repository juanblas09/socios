import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'socios-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero bg-base-200 py-8">
      <div class="hero-content text-left w-full">
        <div class="max-w-full">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-base-content">{{ title() }}</h1>
              @if (subtitle()) {
                <p class="py-2 text-base-content/70">{{ subtitle() }}</p>
              }
            </div>
            @if (showBreadcrumb()) {
              <div class="breadcrumbs text-sm">
                <ul>
                  <li><a class="link link-hover">Dashboard</a></li>
                  <li class="text-base-content/70">{{ title() }}</li>
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class PageHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>();
  showBreadcrumb = input<boolean>(true);
}