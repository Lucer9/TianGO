import { Component, Input, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-code",
  templateUrl: "./code.page.html",
  styleUrls: ["./code.page.scss"],
})
export class CodePage implements OnInit {
  @ViewChild("telInput") telInput;

  tel = "";
  constructor(private router: Router, private userService: UsersService) {}
  ngOnInit() {}

  ionViewLoaded() {
    setTimeout(() => {
      this.telInput.setFocus();
    }, 150);
  }

  registerPhone() {
    this.userService.register("+52" + this.tel).subscribe(
      (res: any) => {
        let user = {
          username: res.user.username,
          id: res.user.id,
        };
        console.log(res);
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigateByUrl("/verificate");
      },
      (error) => {
        console.log(error);
        if (error.error.error.code == "UsernameExistsException") {
          this.resendCode();
          // this.router.navigateByUrl("/verificate");
        }
      }
    );
    // this.router.navigateByUrl("/verificate");
  }

  resendCode() {
    this.userService.getAllUsers().subscribe((res: any) => {
      for (let u of res.users) {
        if (u.phone.S == "+52" + this.tel) {
          let user = {
            username: u.username.S,
            id: u.id.S,
          };
          localStorage.setItem("user", JSON.stringify(user));
          this.userService.resendCode(user).subscribe((res) => {
            this.router.navigateByUrl("/verificate");
          });
        }
      }
    });
  }

  
}
