/**
 * @param {string} s
 * @return {boolean}
 * for order statment -> need to "[" with "]"
 * case1: Wrong order
 * case2: no pair 
 * case3: Pair
 * if("" )
 * else if()
 * 
 */



function steak( list ){

	if(list.length ===0) return [];
    // list.sort((a,b) => a-b )
    let map={}
    for(let item of list){
        if(map[item]===undefined){
            map[item] = 1;
        }else{
            delete map[item] 
        } 
    }
    return Object.keys(map)
}

[1,1,2,3,4,4,4,5,5]

console.log( steak([1,1,2,3,4,4,4,5,5]    ) )

function move( list ){
    let stuck  = [];
	for(let i =0; i< list.length ;i++){
		if(list[i]===0){
			stuck.unshift( list[i]);
        }else{
            stuck.push(list[i])
        }
    }
    return stuck

}
// console.log( move ([0,4,0,2,1]) )
// [0,4,0,2,1] -> [0, 0 , 4, 2, 1]

// event loop 
// 非同步 
// promise