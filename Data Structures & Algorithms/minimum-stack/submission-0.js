class MinStack {
    constructor() {
        this.arr = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.min.length === 0) this.min.push(val);
        else{
            this.min.push(Math.min(this.min[this.min.length-1], val))
        }

        this.arr.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.min.pop()
        this.arr.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length-1]
    }
}
