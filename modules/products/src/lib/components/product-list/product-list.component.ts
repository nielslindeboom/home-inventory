import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectProducts } from '../../domain/store/products.selectors';
import { ProductApiService } from '../../infrastructure/product-api.service';
import { getApiProducts } from '../../domain';
import { ProductsEffects } from '../../infrastructure';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'lib-product-list',
  standalone: true,
  imports: [CommonModule],
  providers:[ProductApiService],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  readonly #store: Store = inject(Store);
  
  products = toSignal(this.#store.select(selectProducts));

  ngOnInit(): void {
    this.#store.dispatch(getApiProducts());
  }
}
