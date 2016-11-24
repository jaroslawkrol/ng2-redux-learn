import {
  LOAD_TABLE, ADD_PRODUCT, DEL_PRODUCT, EDIT_PRODUCT, UPDATE_PRODUCT,
  NEW_PRODUCT, CANCEL, VIEW_PRODUCT
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
  }
}

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
        state: IDLE
      };

    case ADD_PRODUCT:
      //noinspection TypeScriptUnresolvedVariable
      return {
        list: [...state.list, action.payload],
        product: {},
        state: IDLE
      };

    case DEL_PRODUCT:
      //noinspection TypeScriptUnresolvedVariable
      let products:any[] = state.list;
      let index = products.indexOf(action.payload);
          console.log(index);
      if (index > -1) {
        products.splice(index, 1);
      }
      return {
        list: products,
        product: {},
        state: IDLE
      };

    case EDIT_PRODUCT:
      //noinspection TypeScriptUnresolvedVariable
      return {
        list: state.list,
        product: action.payload,
        state: EDITING
      };

    case NEW_PRODUCT:
      //noinspection TypeScriptUnresolvedVariable
      return {
        list: state.list,
        product: action.payload,
        state: NEW
      };

    case CANCEL:
      return {
        list: state.list,
        product: action.payload,
        state: IDLE
      };

    case VIEW_PRODUCT:
      return {
        list: state.list,
        product: action.payload,
        state: VIEWING
      };


    default:
      return state;
  }


}
