/**
 * Created by wrobl on 23.11.2016.
 */
import { Injectable } from '@angular/core';
import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {tableReducer} from "./reducers/table.reducer";
/*import {listReducer} from "./reducers/list.reducer";
import {userReducer} from "./reducers/user.reducer";
import {auth} from "./middleware/auth.middleware";*/

const rootReducer = combineReducers({
  table: tableReducer
});

@Injectable()
export class StoreService {

  private _store: any;

  constructor() {
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
    this._store = createStore(
      rootReducer,
      compose(
        /*applyMiddleware(auth),*/
        window.devToolsExtension  && window.devToolsExtension()
      )
    );
  }

  get state(){
    return this._store.getState();
  }

  public dispatch(action){
    this._store.dispatch(action);
  }
}
