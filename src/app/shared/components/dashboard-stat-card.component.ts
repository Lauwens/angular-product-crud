import { Component, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '@product/models/product.model';

@Component({
  selector: 'app-dashboard-stat-card',
  template: `
    <div class="dashboard-card">
      <mat-card>
        <mat-card-content class="dashboard-card-content stats">
          <h3 class="data">{{ data }}</h3>
          <h4 class="label">{{ label }}</h4>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: `.stats {
    text-align: left;
  }
    .data {
    font-size: larger;
    font-weight: lighter;
  }`,
})
export class DashboardStatCardComponent {
  @Input() label: string | null = '';
  @Input() data: string | null | undefined = '';

  constructor() {}
}
