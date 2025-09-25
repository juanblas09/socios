import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'socios-pagos',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.scss'
})
export class PagosComponent {}
