import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  endpoint = "http://localhost:8080"
  constructor(private http: HttpClient) {}

  register(phone) {
    return this.http.post(`${this.endpoint}/users/register`, {
      username: phone,
      phone: phone,
      password: phone,
    });
  }

  login(phone) {
    return this.http.post(`${this.endpoint}/users/login`, {
      username: phone,
      password: phone,
    });
  }

  verify(user, code) {
    return this.http.post(`${this.endpoint}/users/verify`, {
      user: {
        id: user.id,
        username: user.username,
      },
      code,
    });
  }
}
