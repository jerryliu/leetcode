/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b) => a[0]-b[0]);
    console.log(intervals);

    let result = [intervals[0]]
    for (let interval of intervals){
        let s1 = result[result.length-1][0]
        let e1 = result[result.length-1][1]
        let s2= interval[0]
        let e2= interval[1]
        if(e1 >= s2) {
            result[result.length-1][1] =Math.max(e1,e2);
        }else{
            result.push(interval)
        }
    }
    return result 
};

let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]

let newInterval = [4,8]
console.log(insert(intervals, newInterval));