function steak( list ){
	if(list.length ===0) return [];
let stuck = [];
stuck[0] = list[0]
for(let i=1; i< list.length; i++){
	
	if(stuck[0] === list[i]){
	stuck.pop();
}else{
	stuck.push(list[i])
}

}return stuck 
}

console.log( steak([1,1,2,3,4,4,4,5,5]) )
