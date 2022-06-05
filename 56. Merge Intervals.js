/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {

    intervals.sort((a,b) => a[0] - b[0]);
    if(intervals.length<=1) return intervals
    const result =[intervals[0]]
    for(let interval of intervals){
        let e1 = result[result.length-1][1]
        let e2 = interval[1] 
        let s2 = interval[0] 
        if(e1>=s2){
            result[result.length-1][1] = Math.max(e1,e2) 
        }else{
            result.push(interval)
        }
    }

    // for(let i =1; i<intervals.length; i++){
    //     if( result[result.length-1][1]>=  intervals[i][0]){
    //         result[result.length-1][1]=Math.max( result[result.length-1][1],intervals[i][1]);
    //     }else{
    //     result.push(intervals[i]);
    //     }
    // }
    return result  
    
};
let intervals = [[1,3],[2,6],[8,10],[15,18]]

console.log(merge(intervals));