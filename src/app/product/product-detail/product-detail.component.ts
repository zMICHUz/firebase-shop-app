import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'

import { ProductService } from '../shared/product.service'
import { Product } from '../shared/product.interface'

@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product: Product
  homeButtonText: string = 'Home'
  backButtonText: string = 'Atrás'

  constructor (
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit () {
    this.route.params.subscribe((params) => {
      this.productService
        .getProduct(params['id'])
        .subscribe(
          (product) => (this.product = product),
          (err) => console.error('DO SOMETHING WHEN AN ERROR OCURRED')
        )
    })
  }

  goHome (event) {
    console.log(event)
    this.navigateTo('/home')
  }

  goBack () {
    this.location.back()
  }

  private navigateTo (path: string) {
    this.router.navigate([ path ])
  }
}
