import { ActionTypes } from "./form.actions"

const initialState = {
  firstState: null,
}
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LIST_WORKS_PHOTOS:
      return { ...state, firstState: action.payload }
    default:
      return state
  }
}
