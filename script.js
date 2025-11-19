function mincost(arr)
{ 
	//write your code here
	// return the min cost
	let minCost = 0;
	while(arr.length > 1){
		arr.sort((a,b) => a-b);
		let join = arr[0]+arr[1];
		minCost += join;
		arr.splice(0,2);
		arr.unshift(join);
	}
	return minCost;
}

module.exports=mincost;
