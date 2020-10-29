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
  card_name = "Carlos Aguirre Orozco";
  card_number = "4242 4242 4242 4242";
  card_date = "02/22";
  card_cvc = "123";

  constructor(private stripe: Stripe, private userService: UsersService, public loadingController: LoadingController, private router: Router) {
    this.stripe.setPublishableKey(environment.tiangoPK);
  }
  order = [];
  ngOnInit() {
    let cart = JSON.parse(
      '{"1":{"id":1,"price":50,"title":"Melón","image_path":"https://www.superama.com.mx/Content/images/products/img_large/0000000004050L.jpg","cart":3},"items":6,"price":465,"0ddb37dd-6bb4-4aa6-8b03-ae434e21e288":{"location_id":"2","image_path":"https://bills-tec-ccm-2020-cloud.s3.amazonaws.com/1603932745183.jpg","description":"Un plátano gordito y bien macho.","id":"0ddb37dd-6bb4-4aa6-8b03-ae434e21e288","price":"105","title":"Plátano","cart":3}}'
    );
    for (let key of Object.entries(cart)) {
      //@ts-ignore
      if (key[1].location_id != undefined) {
        console.log(key[1]);
        //@ts-ignore
        this.order.push({ id: key[1].id, price: key[1].price, quantity: key[1].cart });
      }
    }

    console.log(this.order)
  }

  async submit() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Procesando el pago",
    });
    await loading.present();
    let card = {
      number: this.card_number.replace(/\s/g, ""),
      expMonth: parseInt(this.card_date[0] + this.card_date[1]),
      expYear: parseInt("20" + this.card_date[3] + this.card_date[4]),
      cvc: this.card_cvc,
    };
    console.log(card);

    let userId = JSON.parse(localStorage.getItem("user")).id;
    console.log(userId);

    this.userService.addPM("", userId).subscribe((res: any) => {
      let pm = res.id;
      let order = [
        {
          id: "id",
          price: 300.0,
          quantity: 3,
        },
      ];
      this.userService.createOrder(this.order, pm, userId).subscribe((res: any) => {
        console.log(res);
        loading.dismiss();
        localStorage.setItem("cart",undefined)
        this.router.navigateByUrl("/prize");
      });
    });

    //   this.stripe
    //     .createCardToken(card)
    //     .then((token) => console.log(token))
    //     .catch((error) => console.error(error));
  }
}
