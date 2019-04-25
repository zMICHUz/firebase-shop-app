import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import * as _ from 'lodash'

import { DefaultProduct, Product } from '../../product/shared'
import { ProductService } from '../../product/shared/product.service'

@Component({
  templateUrl: 'category.component.html'
})
export class CategoryComponent implements OnInit, OnDestroy {
  title: string
  productsList: Array<Product> = []
  productsList2: Array<Product> = []

  constructor (private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit () {
    this.productsList = []

    this.route.params.subscribe((params) => {
      const cat = params['category']

      this.title = _.toUpper(cat)

      if (cat === 'all') {
        this.productService.getAllProducts().subscribe((products) => {
          this.productsList = products
          this.productsList.push(new DefaultProduct('1000', 'FAIL'))
        })
      } else {
        this.productService
          .getProductsByType(params['category'])
          .subscribe((products) => (this.productsList = products), () => (this.productsList = []))
      }
    })
  }

  ngOnDestroy () {}
}
