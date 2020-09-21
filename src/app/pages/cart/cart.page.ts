import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
})
export class CartPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  products = [
    {
      id: 1,
      price: 50,
      type: "kg",
      name: "Melón",
      img: "https://www.superama.com.mx/Content/images/products/img_large/0000000004050L.jpg",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      cart: 5,
    },
  ];

  cart = {
    items: 5,
    price: 250,
  };

  addItem(index, item) {
    this.products[index].cart++;
    this.cart.items++;
    this.cart.price += item.price;
  }

  removeItem(index, item) {
    this.products[index].cart--;
    this.cart.items--;
    this.cart.price -= item.price;
  }
}
