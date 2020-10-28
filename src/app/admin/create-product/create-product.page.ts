import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.page.html",
  styleUrls: ["./create-product.page.scss"],
})
export class CreateProductPage implements OnInit {
  constructor(
    public loadingController: LoadingController,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  title = "Nuevo ";
  product = {
    title: "",
    price: "",
    description: "",
  };
  formData: FormData = new FormData();

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params.id != undefined) {
        this.title = "Editar";
        this.productService.getProduct(params.id).subscribe((res: any) => {
          console.log(res);
          this.product = res.product;
        });
      }
    });
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];

      this.formData.append("title", this.product.title);
      this.formData.append("price", this.product.price);
      this.formData.append("description", this.product.description);
      this.formData.append("image", file, file.name);
      //@ts-ignore
      this.product.image = file;
      console.log(this.product);
    }
  }
  async postProduct() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Cargando...",
    });
    await loading.present();
    if (this.title == "Editar") {
      //@ts-ignore
      let id = this.product.id;
      //@ts-ignore
      delete this.product.id;
      this.productService.updateProduct(this.product, this.product).subscribe((res) => {
        console.log(res);
        loading.dismiss();
      });
    } else {
      this.productService.addProduct(this.formData).subscribe((res) => {
        console.log(res);
        loading.dismiss();
      });
    }
  }

  deleteProduct() {
    //@ts-ignore
    this.productService.deleteProduct(this.product.id).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(["/newhome"]);
    });
  }
}
