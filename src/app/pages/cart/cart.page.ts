import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
})
export class CartPage implements OnInit {
  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.productsService.getProducts().subscribe((res: any) => {
      if (localStorage.getItem("cart") != undefined) {
        this.cart = JSON.parse(localStorage.getItem("cart"));
      }
      console.log(res);
      for (let p of res.products) {
        p.cart = 0;
        //@ts-ignore
        if (this.cart[p.id] != undefined) {
          p.cart = this.cart[p.id].cart;
          this.products.push(p)
        }
      }
    });
  }

  products = [];

  cart = {
    items: 0,
    price: 0,
  };

  addItem(index, item) {
    this.products[index].cart++;
    this.cart.items++;
    this.cart.price += parseFloat(item.price);

    let itemExists = false;
    //@ts-ignore
    this.cart[item.id] = item;
    console.log(JSON.stringify(this.cart));
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  removeItem(index, item) {
    this.products[index].cart--;
    this.cart.items--;
    this.cart.price -= parseFloat(item.price);
    if(this.products[index].cart == 0) delete this.cart[item.id];
    console.log(JSON.stringify(this.cart));
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
