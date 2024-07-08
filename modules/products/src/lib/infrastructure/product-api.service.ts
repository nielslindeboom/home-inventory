import { HttpClient } from "@angular/common/http"
import { inject, Injectable } from "@angular/core"
import { catchError, map, of } from "rxjs";
import { IProduct } from "../domain";

@Injectable()
export class ProductApiService {
    readonly #httpClient = inject(HttpClient);

    getAll$ = () => this.#httpClient.get('http://127.0.0.1:5000')
        .pipe(
            map(response => {
                const products = <any[]>response;

                return products.map(item => ({
                    Name: item['product_name'].toString(),
                    Description: item['description']
                } as IProduct));
            })
        )
}