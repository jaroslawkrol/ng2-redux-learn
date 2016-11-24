import {
  LOAD_TABLE, ADD_PRODUCT, DEL_PRODUCT, EDIT_PRODUCT, UPDATE_PRODUCT,
  NEW_PRODUCT, CANCEL, VIEW_PRODUCT, FILTER_TABLE, SORT_TABLE
} from "../service/table.service";
/**
 * Created by wrobl on 23.11.2016.
 */

const defaultState = {
  list: [],
  product: {
    name: '',
    price: '',
    image: ''
  },
  filters: {
  },
  sortColumn: 'name',
  sortAsc: true
};

export const NEW = 'NEW';
export const EDITING = 'EDITING';
export const VIEWING = 'VIEWING';
export const IDLE = 'IDLE';

export function tableReducer (state = defaultState, action){

  switch (action.type){

    case LOAD_TABLE:
      return {
        list: action.payload,
        product: {},
        state: IDLE,
        filters: state.filters,
        sortColumn: state.sortColumn,
        sortAsc: state.sortAsc
      };

    case VIEW_PRODUCT:
      return {
        list: state.list,
        product: action.payload,
        state: VIEWING,
        filters: state.filters,
        sortColumn: state.sortColumn,
        sortAsc: state.sortAsc
      };

    case NEW_PRODUCT:
      //noinspection TypeScriptUnresolvedVariable
      return {
        list: state.list,
        product: action.payload,
        state: NEW,
        filters: state.filters,
        sortColumn: state.sortColumn,
        sortAsc: state.sortAsc
      };

    case ADD_PRODUCT:
      //noinspection TypeScriptUnresolvedVariable
      return {
        list: [...state.list, action.payload],
        product: {},
        state: IDLE,
        filters: state.filters,
        sortColumn: state.sortColumn,
        sortAsc: state.sortAsc
      };

    case DEL_PRODUCT:
      //noinspection TypeScriptUnresolvedVariable
      let productList:any[] = state.list;
      let productIndex = productList.indexOf(action.payload);
      if (productIndex > -1) {
        productList.splice(productIndex, 1);
      }
      return {
        list: productList,
        product: {},
        state: IDLE,
        filters: state.filters,
        sortColumn: state.sortColumn,
        sortAsc: state.sortAsc
      };


    case EDIT_PRODUCT:
      //noinspection TypeScriptUnresolvedVariable
      return {
        list: state.list,
        product: action.payload,
        state: EDITING,
        filters: state.filters,
        sortColumn: state.sortColumn,
        sortAsc: state.sortAsc
      };

    case UPDATE_PRODUCT:
      //noinspection TypeScriptUnresolvedVariable
      let products:any[] = state.list;
      let index = products.indexOf(action.payload);
      console.log(index);
      if (index > -1) {
        products[index] = action.payload;
      }
      return {
        list: products,
        product: {},
        state: IDLE,
        filters: state.filters,
        sortColumn: state.sortColumn,
        sortAsc: state.sortAsc
      };

    case CANCEL:
      return {
        list: state.list,
        product: action.payload,
        state: IDLE,
        filters: state.filters,
        sortColumn: state.sortColumn,
        sortAsc: state.sortAsc
      };


    case FILTER_TABLE:
      return {
        list: state.list,
        product: {},
        state: IDLE,
        filters: {
          from: action.payload.priceFrom,
          to: action.payload.priceTo
        },
        sortColumn: state.sortColumn,
        sortAsc: state.sortAsc
      };

    case SORT_TABLE:
      let sortAsc:boolean = true;
      let sortProperty: string = action.payload;

      if(sortProperty === state.sortColumn) {
        sortAsc = !state.sortAsc;
      }

      if(!sortAsc) {
        sortProperty = '-'+sortProperty;
      }

      return {
        list: state.list.sort(dynamicSort(sortProperty)),
        product: {},
        state: IDLE,
        filters: state.filters,
        sortColumn: action.payload,
        sortAsc: sortAsc
      };

    default:
      return state;
  }

  function dynamicSort(property:string) {
    var sortOrder = 1;
    if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

}
