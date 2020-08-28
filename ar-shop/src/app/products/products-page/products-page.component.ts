import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from "../products.service";
import { IProduct } from '../product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  constructor(public prod: ProductsService) { }

  ngOnInit(): void {
    this.prod.getProducts().subscribe(this.getProductsHandler)
  }

  getProductsHandler = (data: IProduct[]) => {
    this.prod.data = data
  }

}
