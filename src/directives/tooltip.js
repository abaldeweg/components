import Tooltip from '../services/tooltip'

const bind = function (el, binding, vnode) {
  el.tooltip = new Tooltip(el, binding, vnode)
  el.tooltip.create()
}

const unbind = function (el) {
  el.tooltip.destroy()
}

const directive = {
  bind,
  unbind,
}

export default directive
