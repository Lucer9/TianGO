import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${environment.endpoint}/products/all`);
  }

  getProduct(id) {
    return this.http.get(`${environment.endpoint}/products/${id}`);
  }

  addProduct(product) {
    return this.http.post(`${environment.endpoint}/products/`, product);
  }

  updateProduct(id, product) {
    return this.http.patch(`${environment.endpoint}/products/${id}`, product);
  }

  deleteProduct(id) {
    return this.http.delete(`${environment.endpoint}/products/${id}`);
  }
}
