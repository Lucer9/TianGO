import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  endpoint = environment.endpoint;
  constructor(private http: HttpClient) {}

  register(phone) {
    environment.endpoint;
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

  resendCode(user) {
    return this.http.post(`${this.endpoint}/users/code`, {
      user: {
        id: user.id,
      },
    });
  }

  getAllUsers(){
    return this.http.get(`${this.endpoint}/users/all`)
  }

  getUser(id){
    return this.http.get(`${this.endpoint}/users/${id}`)
  }

  getPM(userId){
    console.log(`${this.endpoint}/methods?user_id=${userId}`)
    return this.http.get(`${this.endpoint}/methods?user_id=${userId}`);
  }


  addPM(pm) {
    return this.http.post(`${this.endpoint}/methods/create`, {...pm});
  }


  createOrder(products, payment_method, user_id) {
    return this.http.post(`${this.endpoint}/orders`, {
      payment_method,
      user_id,
      products,
    });
  }

  createOrderPoints(products, user_id){
    return this.http.post(`${this.endpoint}/orders/points`, {
      user_id,
      products,
    });
  }
}
