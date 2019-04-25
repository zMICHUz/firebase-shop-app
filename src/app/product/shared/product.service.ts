import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import * as _ from 'lodash'

import { Product, Television, DefaultProduct, Phone, Iron } from './'

@Injectable()
export class ProductService {
  constructor (private db: AngularFirestore) {}

  getProduct (id: string) {
    return this.db
      .doc(`products/${id}`)
      .snapshotChanges()
      .pipe(map((product) => this.createProductFromFirebase(product)))
  }

  getProductsByType (type: string): Observable<Array<Product>> {
    return this.db
      .collection('products', (ref) => ref.where('type', '==', type))
      .snapshotChanges()
      .pipe(
        map((response) =>
          _.orderBy(
            _.map(response, (product) => this.createProductFromFirebase(product)),
            [ 'name' ],
            [ 'asc' ]
          )
        )
      )
  }

  getAllProducts (): Observable<Array<Product>> {
    return this.db
      .collection('products')
      .snapshotChanges()
      .pipe(
        map((response) =>
          _.orderBy(
            _.map(response, (product) => this.createProductFromFirebase(product)),
            [ 'name' ],
            [ 'asc' ]
          )
        )
      )
  }

  private createProductFromFirebase (document) {
    const product = {
      id: document.payload.doc ? document.payload.doc.id : document.payload.id,
      ...document.payload.doc ? document.payload.doc.data() : document.payload.data()
    }

    switch (product['type']) {
      case 'tv':
        return new Television(product['id'], product['name'], product['inches'])

      case 'phone':
        return new Phone(product['id'], product['name'])

      case 'iron':
        return new Iron(product['id'], product['name'], product['watts'])

      default:
        return new DefaultProduct(product['id'], product['name'])
    }
  }
}
