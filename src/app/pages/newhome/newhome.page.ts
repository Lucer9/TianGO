import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-newhome",
  templateUrl: "./newhome.page.html",
  styleUrls: ["./newhome.page.scss"],
})
export class NewhomePage implements OnInit {
  personas = [
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      name: "Clotilde",
      category: "Frutas y Verduras",
    },
    {
      img: "https://mibimibi-assets.mangege.com/stickers/dad1b451d905431685efa1776141725a/618183dfe03050e4b61732413afb384c.jpg",
      name: "Mofupiyo",
      category: "Productos Varios",
    },

    {
      img: "https://avatars0.githubusercontent.com/u/1113708?s=460&v=4",
      name: "Juan Velez",
      category: "Amazon Merchandise",
    },
  ];

  products = [
    {
      id: 1,
      price: 50,
      type: "kg",
      name: "Melón",
      img: "https://www.superama.com.mx/Content/images/products/img_large/0000000004050L.jpg",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      cart: 0,
    },
  ];

  cart = {
    items: 0,
    price: 0,
  };
  constructor() {}
  ngOnInit() {}

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
