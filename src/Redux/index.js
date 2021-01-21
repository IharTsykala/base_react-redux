import { combineReducers } from "redux"

import { Reducer } from "./store/form/form.reducer"

export default combineReducers({
  photo: Reducer,
})
