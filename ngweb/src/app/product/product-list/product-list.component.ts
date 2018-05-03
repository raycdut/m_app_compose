import {Component, OnInit} from '@angular/core';
import {ProductListService} from '../../services/product/product-list.service';

@Component({selector: 'app-product-list', templateUrl: './product-list.component.html', styleUrls: ['./product-list.component.css']})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private _productList: ProductListService) {}

  ngOnInit() {
    this.products = this
      ._productList
      .GetAllProducts();
  }

}
