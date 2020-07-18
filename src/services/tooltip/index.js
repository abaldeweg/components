export default class Tooltip {
  constructor(el, binding, vnode) {
    ;(this._el = el),
      (this._binding = binding),
      (this._vnode = vnode),
      (this._handlerMouseover = null),
      (this._handlerMouseout = null)
  }

  _getPosition() {
    const modifier = this._binding.modifiers

    if (modifier.top) return 'top'
    if (modifier.bottom) return 'bottom'
    if (modifier.left) return 'left'
    if (modifier.right) return 'right'

    return 'top'
  }

  _createTooltip() {
    const grid = this._el.getBoundingClientRect()

    this._vnode.context.$root.$emit('open-tooltip', {
      title: this._binding.value,
      position: this._getPosition(),
      triggerY: grid.y,
      triggerX: grid.x,
      triggerWidth: this._el.offsetWidth,
      triggerHeight: this._el.offsetHeight,
    })
  }

  _destroyTooltip() {
    this._vnode.context.$root.$emit('close-tooltip')
  }

  create() {
    this._handlerMouseover = () => this._createTooltip()
    this._handlerMouseout = () => this._destroyTooltip()

    this._el.addEventListener('mouseover', this._handlerMouseover)
    this._el.addEventListener('mouseout', this._handlerMouseout)
  }

  destroy() {
    this._destroyTooltip()
    this._el.removeEventListener('mouseover', this._handlerMouseover)
    this._el.removeEventListener('mouseout', this._handlerMouseout)
  }
}
