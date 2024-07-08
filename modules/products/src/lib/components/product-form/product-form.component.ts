import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addProduct } from '../../domain';

@Component({
  selector: 'lib-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  private store = inject(Store);
  
  form = new FormGroup({
    name: new FormControl<string | undefined>(undefined),
    ean: new FormControl<string | undefined>(undefined)
  });

  addProduct() {
    this.store.dispatch(addProduct({ product: { Id: "1", Name: this.form.value.name!, Description: this.form.value.ean!} }))
  }
}
