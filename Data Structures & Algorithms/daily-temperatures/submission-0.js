class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
       
    let s = [temperatures.length-1];
  let ans =[0];

    for(let i = temperatures.length-2 ; i>=0 ; i-- ){

        while(s.length!=0 && temperatures[s[s.length-1]] <= temperatures[i] ){
            s.pop()
        }

        if(s.length){
            ans.push(s[s.length-1]-i)
        }
        else{
            ans.push(0)
        }

    s.push(i)
    }

    return ans.reverse();

    }
}
