class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let arr = []

        for(let i=0; i<position.length; i++){
            arr.push([position[i], speed[i]])
        }

        arr.sort((a,b)=>b[0]-a[0])

        let s= []
        if(arr.length == 1) return 1
        else s.push(arr[0]);


        for(let i=1;i<arr.length;i++){
            let time1 = (target - s[s.length-1][0])/s[s.length-1][1]
            let time2 = (target - arr[i][0])/arr[i][1]
            
            if(!(time2 <= time1)) s.push(arr[i]) 

        }

        return s.length
    }
}
