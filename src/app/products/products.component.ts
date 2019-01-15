import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/iproduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle: string = "Product List ";
  imgshow: boolean = false;
  imgWidth: number = 25;
  imgMargin: number = 0;
  listFilter: string;
  products: IProduct[]=[];


  constructor(private ps: ProductService) {
    

  }

  ngOnInit() {

    this.ps.getProducts().subscribe((products) => {
      if (products) {
        this.products = products;
      }
    }, error => {
      console.log("error");
    });


  }
  imgshowhide() {
    this.imgshow = !this.imgshow;
  }
  onRatingClick(message: string): void {
    this.pageTitle = "";
    this.pageTitle = 'Product List' + " : " + message;
  }

  
}
