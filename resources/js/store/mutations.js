export const SET_NOTIFICATION = (state, notification) => {
  state.notifications.push(notification)
}

export const DELETE_NOTIFICATION = (state) => {
  state.notifications = []
}