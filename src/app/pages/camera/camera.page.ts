import { Component, OnInit } from "@angular/core";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { ToastController } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: "app-camera",
  templateUrl: "./camera.page.html",
  styleUrls: ["./camera.page.scss"],
})
export class CameraPage implements OnInit {
  constructor(private location: Location, private qrScanner: QRScanner, private toastCtrl: ToastController) {}

  ngOnInit() {}
  scanSubscription;

  scan() {
    (window.document.querySelector("ion-app") as HTMLElement).classList.add("cameraView");
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          this.scanSubscription = this.qrScanner.scan().subscribe(async (text:string) => {
            let toast = await this.toastCtrl.create({
              message: `${text}`,
              position: 'bottom',
              duration: 3000,
              buttons: [
                {
                  side: 'start',
                  icon: 'star',
                  text: 'Favorite',
                  handler: () => {
                    console.log('Favorite clicked');
                  }
                }, {
                  text: 'Done',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                }
              ]
            });
            toast.present();

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

  goBack(){
    this.location.back();
    }
}
