let notifications = []

const list = function() {
  return notifications
}

const create = function(msg, state = 'neutral', timer = 5000, undo = null) {
  const notification = {
    id: new Date().getTime() + '_' + Math.floor(Math.random() * 100000),
    msg: msg,
    state: state,
    timer: timer,
    undo: undo,
  }
  notifications.push(notification)
  setTimeout(() => {
    remove(notification)
  }, notification.timer)
}

const remove = function(notification) {
  const id = notifications.indexOf(notification)
  notifications.splice(id, 1)
}

const notify = { list, create }

export default notify
