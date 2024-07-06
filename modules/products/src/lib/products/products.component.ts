import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { createAction, createReducer, on, provideStore, Store, StoreModule } from '@ngrx/store';
import { addProduct } from './store';
import { selectProducts } from './store/products.selectors';
@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  private readonly store: Store = inject(Store);

  products = toSignal(this.store.select(selectProducts));

  addProduct() {
    this.store.dispatch(addProduct({ product: { Id: "1", Name: 'Henk', Description: 'Test' } }))
  }
}
