class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        this.keyStore.set(timestamp,{key,value})
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        for(let i = timestamp; i>=0; i--){
            let val = this.keyStore.get(i)
            if(val?.key === key){
                return val.value
            }
        }

        return ""
    }
}
