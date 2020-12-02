import { Component, OnInit } from "@angular/core";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { ToastController } from "@ionic/angular";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-camera",
  templateUrl: "./camera.page.html",
  styleUrls: ["./camera.page.scss"],
})
export class CameraPage implements OnInit {
  cart = {
    items: 0,
    price: 0,
  };
  constructor(
    private location: Location,
    private qrScanner: QRScanner,
    private toastCtrl: ToastController,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  type = "products";
  text =
    '{"image_path":"https://bills-tec-ccm-2020-cloud.s3.amazonaws.com/1603852416615.jpeg","description":"Tacos de pastor","id":"3a987608-861a-4dac-8041-1d1c523a790d","price":"10","title":"Tacos Velez"}';
  ngOnInit() {
    if (localStorage.getItem("cart") != undefined && localStorage.getItem("cart") != "undefined") {
      this.cart = JSON.parse(localStorage.getItem("cart"));
    }

    this.route.params.subscribe((params) => {
      console.log(params);
      if (params.type != undefined) {
        this.type = params.type;
      }
      // this.showToaster(this.text);
    });
  }
  scanSubscription;

  scan() {
    (window.document.querySelector("ion-app") as HTMLElement).classList.add("cameraView");
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          this.scanSubscription = this.qrScanner.scan().subscribe(async (text: string) => {
            this.showToaster(text);
          });
        } else {
          console.error("Permission Denied", status);
        }
      })
      .catch((e: any) => {
        console.error("Error", e);
      });
  }
  stopScanning() {
    this.scanSubscription ? this.scanSubscription.unsubscribe() : null;
    this.scanSubscription = null;
    (window.document.querySelector("ion-app") as HTMLElement).classList.remove("cameraView");
    this.qrScanner.hide();
    this.qrScanner.destroy();
  }
  ionViewWillEnter() {
    this.scan();
  }
  ionViewWillLeave() {
    this.stopScanning();
  }

  goBack() {
    this.location.back();
  }

  addItem(item) {
    if (this.cart[item.id] != undefined) {
      console.log("add");
      item.cart = this.cart[item.id].cart = this.cart[item.id].cart + 1;
    } else {
      item.cart = 1;
    }

    this.cart.items++;
    this.cart.price += parseFloat(item.price);

    let itemExists = false;
    //@ts-ignore
    this.cart[item.id] = item;
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  async showToaster(json) {
    let parseJSON = JSON.parse(json);
    if (this.type == "market") {
      this.router.navigateByUrl("/newhome/" + parseJSON.id);
    } else {
      this.addItem(parseJSON);
      console.log(this.cart);

      let toast = await this.toastCtrl.create({
        message: `Se añadio al carrito ${parseJSON.title}`,
        position: "bottom",
        duration: 3000,
        buttons: [
          // {
          //   side: "start",
          //   icon: "star",
          //   text: "Favorite",
          //   handler: () => {
          //     console.log("Favorite clicked");
          //   },
          // },
          {
            text: "Pagar",
            role: "cancel",
            handler: () => {
              this.router.navigateByUrl("/cart");
              console.log("Cancel clicked");
            },
          },
        ],
      });
      toast.present();
    }
  }
}
