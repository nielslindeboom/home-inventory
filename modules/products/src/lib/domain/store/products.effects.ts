import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductApiService } from "../../infrastructure/product-api.service";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { apiLoadedSuccess, getApiProducts } from "..";

@Injectable()
export class ProductsEffects {
    private actions$ = inject(Actions);
    private productApiService = inject(ProductApiService);

    loadProducts$ = createEffect(() => this.actions$
        .pipe(
            ofType(getApiProducts),
            exhaustMap(() => this.productApiService.getAll$()
                .pipe(
                    map(products => apiLoadedSuccess({ products })),
                    catchError(() => EMPTY)
                )
            )
        )
    );
}