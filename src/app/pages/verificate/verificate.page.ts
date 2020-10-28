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
        this.error = true;
        console.log(error);
      }
    );
  }

  input(){
    if(this.code.length == 0){
      this.error = false
    }
  }
}
