import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/iproduct';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = "Product details page ";
  products: IProduct| undefined;
  errorMessage = '';
  constructor(private route: ActivatedRoute, private ps: ProductService,private router: Router) {
   
  }
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.ps.getProduct(id).subscribe(
      products => this.products = products,
      error => this.errorMessage = <any>error);
  }


  onback():void{
    this.router.navigate(['/product']);
  }
}
