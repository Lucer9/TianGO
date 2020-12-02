import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-verificate",
  templateUrl: "./verificate.page.html",
  styleUrls: ["./verificate.page.scss"],
})
export class VerificatePage implements OnInit {
  code = "";
  user;
  error = false;
  constructor(private userService: UsersService, private router: Router) {}
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
  }

  verify() {
    this.userService.verify(this.user, this.code).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl("/market");
      },
      (error) => {
        if (error.error.error.message == "User cannot be confirmed. Current status is CONFIRMED") {
          this.loginPhone(this.user.username);
        } else {
          this.error = true;
        }
        console.log(error);
        console.log(error.error.error.message);
      }
    );
  }

  input() {
    if (this.code.length == 0) {
      this.error = false;
    }
  }

  loginPhone(tel) {
    console.log("trying login");
    this.userService.login(tel).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl("/market");
      },
      (error) => {
        console.log(error);
        if (error.error.error.code == "UserNotConfirmedException") {
          this.router.navigateByUrl("/verificate");
        }
      }
    );
  }
}
