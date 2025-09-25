import { Component, inject } from '@angular/core';
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
import {toSignal} from "@angular/core/rxjs-interop";
import {MemberService} from "../../providers/member.service";
import {CategoriesService} from "../../providers/category.service";
import {map} from "rxjs";

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
  template: `
    <div class="page-container">
      
      <socios-page-header
          title="Socios"
          subtitle="Gestión de asociados, altas y bajas"
      ></socios-page-header>
      <div class="content-body">
        <div class="card bg-base-100 shadow-sm">
          <table class="table table-pin-rows bg-base-200">
            <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>DNI</th>
              <th>Socio Boca</th>
              <th>Localidad</th>
              <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
              @for (member of members() || []; track member.id) {
                <tr>
                  <td>{{ member.memberNumber }}</td>
                  <td>{{ member.lastName }}, {{ member.firstName }}</td>
                  <td>{{ categoriesMap()?.get(member.categoryId) || 'Sin categoría' }}</td>
                  <td>{{ member.dni }}</td>
                  <td>{{ member.clubMember === 'active' ? 'Activo' : member.clubMember === 'affiliate' ? 'Adherente' : 'No socio' }}</td>
                  <td>{{ member.address }}</td>
                  <td>
                    <button class="btn btn-sm btn-ghost btn-square" title="Ver">
                      <ng-icon name="lucideEye"></ng-icon>
                    </button>
                    <button class="btn btn-sm btn-ghost btn-square" title="Editar">
                      <ng-icon name="lucidePencil"></ng-icon>
                    </button>
                    <button class="btn btn-sm btn-ghost btn-square" title="Cuotas">
                      <ng-icon name="lucideCreditCard"></ng-icon>
                    </button>
                    <button class="btn btn-sm btn-ghost btn-square" title="Eliminar">
                      <ng-icon name="lucideTrash2"></ng-icon>
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      @apply p-6;
    }
  `]
})
export class SociosComponent {
  memberService = inject(MemberService);
  categoriesService = inject(CategoriesService);

  // Traemos todos los socios
  members = toSignal(this.memberService.getAll());

  // Traemos todas las categorías
  categories = toSignal(this.categoriesService.getAll());

  // Mapeamos las categorías para tener un acceso rápido por id
  categoriesMap = toSignal(
      this.categoriesService.getAll().pipe(
          map(categories => {
            const map = new Map<number, string>();
            categories.forEach(category => {
              map.set(category.id, category.name);
            });
            return map;
          })
      )
  )
}