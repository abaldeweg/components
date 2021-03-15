const choices = function(choices, entry) {
  return choices.indexOf(entry) !== -1
}

const validator = {
  choices,
}

export default validator
