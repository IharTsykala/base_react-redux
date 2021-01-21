export const ActionTypes = {
  SET_LIST_WORKS_PHOTOS: "[PHOTO] Set list works photos",
  SET_LIST_TEAM_PHOTOS: "[PHOTO] Set list team photos",
  SET_CURRENT_PHOTO: "[PHOTO] Set current photo",

  SET_STATE_MODAL_WINDOW: "[Modal] Set state for modal",
}

export const setListWorksPhotos = (arrayPhotos) => ({
  type: ActionTypes.SET_LIST_WORKS_PHOTOS,
  payload: arrayPhotos,
})

export const setStateModalWindow = (stateModal) => ({
  type: ActionTypes.SET_STATE_MODAL_WINDOW,
  payload: stateModal,
})
