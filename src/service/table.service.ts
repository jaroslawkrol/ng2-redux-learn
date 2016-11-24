import {Injectable} from "@angular/core";
import {StoreService} from "../store.service";
import {Product} from "../model/product";
/**
 * Created by wrobl on 23.11.2016.
 */

/**
 * Events names as magic strings.
 * @type {string}
 */
export const LOAD_TABLE = 'LOAD_TABLE';
export const SORT_TABLE = 'SORT_TABLE';
export const NEW_PRODUCT = 'NEW_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DEL_PRODUCT = 'DEL_PRODUCT';
;
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const VIEW_PRODUCT = 'VIEW_PRODUCT';
export const FILTER_TABLE = 'FILTER_TABLE';
export const CANCEL = 'CANCEL';

/**
 * Service, that handles all user actions.
 */
@Injectable()
export class TableService {

  constructor(private store: StoreService) {
  }

  /**
   * Product count, used as primary key for all products.
   * @type {number}
   */
  private productCount: number = 0;

  /**
   * Initial product count, used to generate some dummy data.
   * @type {number}
   */
  private initialProductsCount: number = 20;

  /**
   * Load table.
   */
  public loadTable() {
    this.store.dispatch({
      type: LOAD_TABLE,
      payload: this.getSampleProducts()
    })
  }

  /**
   * Sort table by given property.
   * @param property
   */
  public sortTable(property: string) {
    this.store.dispatch({
      type: SORT_TABLE,
      payload: property
    })
  }

  /**
   * Filter table by given price (beetwen priceFrom and priceTo).
   * @param priceFrom
   * @param priceTo
   */
  public applyFilters(priceFrom: number, priceTo: number) {
    this.store.dispatch({
      type: FILTER_TABLE,
      payload: {priceFrom, priceTo}
    })
  }

  /**
   * Clear price filter.
   */
  public clearFilters() {
    this.store.dispatch({
      type: FILTER_TABLE,
      payload: {}
    })
  }

  /**
   * Show product's details.
   * @param product
   */
  public viewProduct(product: any) {
    this.store.dispatch({
      type: VIEW_PRODUCT,
      payload: product
    })
  }

  /**
   * Show new product form.
   */
  public newProduct() {
    this.store.dispatch({
      type: NEW_PRODUCT,
      payload: {}
    })
  }

  /**
   * Save new product.
   * @param product
   */
  public addProduct(product: Product) {
    this.productCount++;
    product.id = this.productCount;

    this.store.dispatch({
      type: ADD_PRODUCT,
      payload: product
    })
  }

  /**
   * Show edit product form.
   * @param product
   */
  public editProduct(product: any) {
    this.store.dispatch({
      type: EDIT_PRODUCT,
      payload: product
    })
  }

  /**
   * Save edited product.
   * @param product
   */
  public updateProduct(product: Product) {
    this.store.dispatch({
      type: UPDATE_PRODUCT,
      payload: product
    })
  }

  /**
   * Delete product.
   * @param product
   */
  public deleteProduct(product: any) {
    this.productCount--;
    this.store.dispatch({
      type: DEL_PRODUCT,
      payload: product
    })
  }

  /**
   * Cancel actions and back to table.
   */
  public cancel() {
    this.store.dispatch({
      type: CANCEL,
      payload: {}
    })
  }

  /**
   * Method generates some dummy data for test purposes.
   * @returns {Product[]}
   */
  private getSampleProducts(): any[] {
    let sampleImgUrl: string = 'http://www.visualworkplaceinc.com/wp-content/uploads/2014/06/Product-Samples-800px.jpg';
    let loremIpsum: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ex eget erat dapibus fermentum in vitae dolor. Maecenas suscipit tempus accumsan. Quisque rhoncus augue vel ligula mollis, in fermentum nulla auctor. Morbi varius libero vitae tristique laoreet. Proin vehicula nunc in dolor lobortis viverra. Curabitur non commodo ex, a sagittis dui. Curabitur consectetur metus pretium nibh consequat efficitur. Maecenas ut vestibulum elit.';
    let products: Product[] = [];

    for (let i = 0; i < this.initialProductsCount; i++) {
      let product: Product = new Product('Produkt ' + i, 1.5 * i, sampleImgUrl, i % 6, loremIpsum, i * 12, !(i % 3));
      product.id = i;
      products.push(product);
      this.productCount = i + 1;
    }

    return products;
  }
}
