import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { LoadingController, AlertController } from "@ionic/angular";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";

import { Location } from "@angular/common";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
})
export class CartPage implements OnInit {
  products = [];
  order = [];
  cart = {
    items: 0,
    price: 0,
  };

  points = 0;
  userId;

  constructor(
    private productsService: ProductsService,
    private userService: UsersService,
    public loadingController: LoadingController,
    private router: Router,
    public alertController: AlertController,
    private location: Location,

  ) {}
  async ngOnInit() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Cargando tus productos",
    });
    await loading.present();
    let userId = JSON.parse(localStorage.getItem("user")).id;
    this.userId = userId;
    this.userService.getUser(userId).subscribe((res: any) => {
      console.log(res);
      this.points = res.user.points;
    });
    this.productsService.getAllProducts().subscribe((res: any) => {
      if (localStorage.getItem("cart") != undefined && localStorage.getItem("cart") != "undefined") {
        this.cart = JSON.parse(localStorage.getItem("cart"));
      }
      console.log(res);
      for (let p of res.products) {
        p.cart = 0;
        //@ts-ignore
        if (this.cart[p.id] != undefined) {
          p.cart = this.cart[p.id].cart;
          this.products.push(p);
        }
      }
      loading.dismiss();
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

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Como obtener puntos",
      message:
        "Es muy facil, solo le tienes que pedir al personal de TIANGO que quieres más puntos y ellos te cobraran en efectivo  1 punto por 1 peso. Solo mencionales el siguiente código: "+this.userId,
      buttons: ["OK"],
    });

    await alert.present();
  }

  goBack(){
    //@ts-ignore
    this.location.back();
  }

  removeItem(index, item) {
    console.log(this.products[index].cart);
    this.products[index].cart = this.products[index].cart - 1;
    this.cart.items--;
    this.cart.price -= parseFloat(item.price);
    if (this.products[index].cart == 0) delete this.cart[item.id];
    console.log(JSON.stringify(this.cart));
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  async payWithPoints() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Realizando pago",
    });
    await loading.present();
    let userId = JSON.parse(localStorage.getItem("user")).id;
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (let key of Object.entries(cart)) {
      //@ts-ignore
      if (key[1].location_id != undefined) {
        console.log(key[1]);
        //@ts-ignore
        this.order.push({ id: key[1].id, price: key[1].price, quantity: key[1].cart });
      }
    }
    console.log(this.order);
    this.userService.createOrderPoints(this.order, userId).subscribe((res: any) => {
      console.log(res);
      loading.dismiss();
      localStorage.setItem("cart", undefined);
      this.router.navigateByUrl("/prize");
    });
  }
}
