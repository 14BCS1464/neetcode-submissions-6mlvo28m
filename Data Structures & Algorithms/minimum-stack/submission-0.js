class MinStack {
  constructor() {
    this.minStack = []
    this.mainStack = []
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.mainStack.push(val)
    if (this.minStack.length === 0) {
      this.minStack.push(val)

    } else {
      let Pre = Math.min(val, this.minStack[this.minStack.length - 1])
      this.minStack.push(
        Pre
      )
    }

  }

  /**
   * @return {void}
   */
  pop() {
     this.mainStack.pop()
     this.minStack.pop()
  }

  /**
   * @return {number}
   */
  top() {
   return this.mainStack[this.mainStack.length - 1]
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1]
  }
}
