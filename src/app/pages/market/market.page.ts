import { Component, OnInit } from "@angular/core";
import { LocationsService } from "src/app/services/locations.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-market",
  templateUrl: "./market.page.html",
  styleUrls: ["./market.page.scss"],
})
export class MarketPage implements OnInit {
  constructor(private markets: LocationsService, public loadingController: LoadingController) {}
  marketList = [];
  backupMarketList = [];
  searchWord;

  async ngOnInit() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Cargando mercados",
    });
    await loading.present();
    this.markets.getLocations().subscribe((res: any) => {
      console.log(res.locations);
      this.marketList = res.locations;
      this.backupMarketList = res.locations;
      loading.dismiss();
    });
  }

  searchFor() {
    console.log(this.searchWord);
    this.marketList = this.backupMarketList;
    this.marketList = this.marketList.filter((current) => {
      if (current.title && this.searchWord) {
        if (current.title.toLowerCase().indexOf(this.searchWord.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }
}
