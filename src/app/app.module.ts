import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NgApexchartsModule } from 'ng-apexcharts';

import { ProductFormComponent } from '@product/components/product-form/product-form.component';
import { ProductIndexComponent } from '@product/components/product-index/product-index.component';
import { ProductListComponent } from '@product/components/product-list/product-list.component';
import { ProductViewComponent } from '@product/components/product-view/product-view.component';
import { ProductEffects } from '@product/store/product.effects';
import { productReducer } from '@product/store/product.reducer';
import { DeleteDialogComponent } from '@shared/components/delete-dialog.component';

import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { AppRoutingModule } from './app.routes';
import { LayoutComponent } from './layout/layout.component';
import { ProductStockChartComponent } from '@product/components/product-stock-chart/product-stock-chart.component';
import { ProductTypeChartComponent } from '@product/components/product-type-chart/product-type-chart.component';
import { DashboardStatCardComponent } from '@shared/components/dashboard-stat-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductFormComponent,
    ProductIndexComponent,
    ProductStockChartComponent,
    ProductTypeChartComponent,
    DeleteDialogComponent,
    DashboardStatCardComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ products: productReducer, product: productReducer }),
    EffectsModule.forRoot([ProductEffects]),
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatChipsModule,
    NgApexchartsModule,
  ],
  bootstrap: [AppComponent],
  ...appConfig,
})
export class AppModule {}
