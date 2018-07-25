module.exports = class Hook {
    
  constructor() {
      this.init()
  }
  init() {
      this.a = 1
      this.b = 2
  }
  sum() {
      return this.a  + this.b
  }
}