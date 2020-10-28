import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";

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

  searchWord;
  products = [
    {
      id: 1,
      price: 50,
      title: "Melón",
      image_path: "https://www.superama.com.mx/Content/images/products/img_large/0000000004050L.jpg",
      cart: 0,
    },
  ];

  cart = {
    items: 0,
    price: 0,
  };
  backupProducts: any;
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
        }
      }
      this.products = res.products;
      this.backupProducts = res.products;
    });
  }

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
    if (this.products[index].cart == 0) delete this.cart[item.id];
    console.log(JSON.stringify(this.cart));
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  searchFor() {
    console.log(this.searchWord);
    this.products = this.backupProducts;
    if (this.searchWord != "") {
      this.products = this.products.filter((current) => {
        if (current.title && this.searchWord) {
          if (current.title.toLowerCase().indexOf(this.searchWord.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    }
  }
}
