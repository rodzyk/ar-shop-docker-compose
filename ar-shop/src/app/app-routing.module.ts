import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import("src/app/products/products.module").then((m) => m.ProductsModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import("src/app/cart/cart.module").then((m) => m.CartModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
