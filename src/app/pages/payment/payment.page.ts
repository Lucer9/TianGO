import { Component, OnInit } from "@angular/core";
import { Stripe } from "@ionic-native/stripe/ngx";
import { environment } from "src/environments/environment";
import { storage } from "firebase";
import { UsersService } from "src/app/services/users.service";
import { LoadingController } from "@ionic/angular";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"],
})
export class PaymentPage implements OnInit {
  card_name = "";
  card_number = "";
  card_date = "";
  card_cvc = "";

  payments = [];

  constructor(private stripe: Stripe, private userService: UsersService, public loadingController: LoadingController, private router: Router) {
    this.stripe.setPublishableKey(environment.tiangoPK);
  }
  order = [];
  ngOnInit() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    for (let key of Object.entries(cart)) {
      //@ts-ignore
      if (key[1].location_id != undefined) {
        console.log(key[1]);
        //@ts-ignore
        this.order.push({ id: key[1].id, price: key[1].price, quantity: key[1].cart });
      }
    }
    let userId = JSON.parse(localStorage.getItem("user")).id;
    this.userService.getPM(userId).subscribe((res: any) => {
      console.log(res);
      this.payments = res.methods;
    });
    console.log(this.order);
  }

  async pay(card_id) {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Realizando pago",
    });
    await loading.present();
    console.log(card_id);
    let userId = JSON.parse(localStorage.getItem("user")).id;
    this.userService.createOrder(this.order, card_id, userId).subscribe((res: any) => {
      console.log(res);
      loading.dismiss();
      localStorage.setItem("cart", undefined);
      this.router.navigateByUrl("/prize");
    });
  }




  async add_pm() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Validando tarjeta",
    });
    await loading.present();
    let card = {
      card_details: {
        number: this.card_number.replace(/\s/g, ""),
        exp_month: parseInt(this.card_date[0] + this.card_date[1]),
        exp_year: parseInt("20" + this.card_date[3] + this.card_date[4]),
        cvc: this.card_cvc,
      },
      billing_details: {
        name: this.card_name,
      },
    };

    this.userService.addPM(card).subscribe((res: any) => {
      let pm = res.id;
      loading.dismiss();
      this.pay(pm)
    });
  }
}
