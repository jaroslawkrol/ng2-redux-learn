import {Injectable} from "@angular/core";
import {StoreService} from "../store.service";
/**
 * Created by wrobl on 23.11.2016.
 */

export const LOAD_TABLE = 'LOAD_TABLE';
export const NEW_PRODUCT = 'NEW_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DEL_PRODUCT = 'DEL_PRODUCT';;
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const VIEW_PRODUCT = 'VIEW_PRODUCT';
export const CANCEL = 'CANCEL';

@Injectable()
export class TableService {

  constructor(private store: StoreService) {
  }

  public loadTable() {
    this.store.dispatch({
      type: LOAD_TABLE,
      payload: this.getSampleProducts()
    })
  }

  public newProduct() {
    this.store.dispatch({
      type: NEW_PRODUCT,
      payload: {}
    })
  }

  public cancel() {
    this.store.dispatch({
      type: CANCEL,
      payload: {}
    })
  }

  public addProduct(name:string, price:number, image:string) {
    let product:any = {
      name, price, image
    };

    this.store.dispatch({
      type: ADD_PRODUCT,
      payload: product
    })
  }

  public deleteProduct(product:any) {
    this.store.dispatch({
      type: DEL_PRODUCT,
      payload: product
    })
  }

  public editProduct(product:any) {
    this.store.dispatch({
      type: EDIT_PRODUCT,
      payload: product
    })
  }

  public updateProduct(oldProduct:any, name:string, price:number, image:string) {
    let product:any = {
      name, price, image
    };

    this.store.dispatch({
      type: DEL_PRODUCT,
      payload: oldProduct
    })

    this.store.dispatch({
      type: ADD_PRODUCT,
      payload: product
    })

  }

  public viewProduct(product:any) {
    this.store.dispatch({
      type: VIEW_PRODUCT,
      payload: product
    })
  }

  private getSampleProducts(): any[] {

    let product: any = {
      name: 'Lorem',
      price: 12.9,
      image: 'http://www.visualworkplaceinc.com/wp-content/uploads/2014/06/Product-Samples-800px.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ex eget erat dapibus fermentum in vitae dolor. Maecenas suscipit tempus accumsan. Quisque rhoncus augue vel ligula mollis, in fermentum nulla auctor. Morbi varius libero vitae tristique laoreet. Proin vehicula nunc in dolor lobortis viverra. Curabitur non commodo ex, a sagittis dui. Curabitur consectetur metus pretium nibh consequat efficitur. Maecenas ut vestibulum elit.'
    }

    let product1: any = {
      name: 'Ipsum',
      price: 12.9,
      image: 'http://www.visualworkplaceinc.com/wp-content/uploads/2014/06/Product-Samples-800px.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ex eget erat dapibus fermentum in vitae dolor. Maecenas suscipit tempus accumsan. Quisque rhoncus augue vel ligula mollis, in fermentum nulla auctor. Morbi varius libero vitae tristique laoreet. Proin vehicula nunc in dolor lobortis viverra. Curabitur non commodo ex, a sagittis dui. Curabitur consectetur metus pretium nibh consequat efficitur. Maecenas ut vestibulum elit.'
    }

    let product2: any = {
      name: 'Dolor',
      price: 12.9,
      image: 'http://www.visualworkplaceinc.com/wp-content/uploads/2014/06/Product-Samples-800px.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ex eget erat dapibus fermentum in vitae dolor. Maecenas suscipit tempus accumsan. Quisque rhoncus augue vel ligula mollis, in fermentum nulla auctor. Morbi varius libero vitae tristique laoreet. Proin vehicula nunc in dolor lobortis viverra. Curabitur non commodo ex, a sagittis dui. Curabitur consectetur metus pretium nibh consequat efficitur. Maecenas ut vestibulum elit.'
    }

    return [product, product1, product2];
  }
}
