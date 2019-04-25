import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

import { Product } from '../shared/product.interface'

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: [ 'product-list.component.scss' ]
})
export class ProductListComponent implements OnInit {
  @Input('list') productList: Array<Product>

  error: string = 'No existen productos en esta categoría'

  constructor (private router: Router) {}

  ngOnInit () {}

  navigateTo (id: string) {
    this.router.navigate([ '/product', id ])
  }
}
