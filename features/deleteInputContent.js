exports.command = function (backspaceCount, deleteCount) {

  for (var i = 0; i <= backspaceCount; i++) { // десять раз жмём бекспейс
    this.keys(this.Keys.BACK_SPACE)
    i++
  }

  for (var i = 0; i <= deleteCount; i++) { // десять раз жмём бекспейс
    this.keys(this.Keys.DELETE)
    i++
  }


}
