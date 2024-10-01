import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from '@product/components/product-form/product-form.component';
import { ProductIndexComponent } from '@product/components/product-index/product-index.component';
import { ProductViewComponent } from '@product/components/product-view/product-view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    children: [
      { path: '', component: ProductIndexComponent },
      { path: 'create', component: ProductFormComponent },
      { path: ':id', component: ProductViewComponent },
      { path: ':id/edit', component: ProductFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
