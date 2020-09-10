import {Component, Input, ViewChild, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-code",
  templateUrl: "./code.page.html",
  styleUrls: ["./code.page.scss"],
})
export class CodePage implements OnInit {
  @ViewChild("telInput") telInput;

  tel = "21323123";
  constructor(private router: Router) {}
  ngOnInit() {}

  ionViewLoaded() {
    setTimeout(() => {
      this.telInput.setFocus();
    }, 150);
  }

  nextPage() {
    this.router.navigateByUrl("/verificate");
  }
}
