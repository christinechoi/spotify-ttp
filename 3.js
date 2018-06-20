class Node {
	constructor(amt, denom, rem, index, multiplier) {
		this.amt = amt;
		this.denom = denom;
		this.rem = rem;
		this.index = index;
		this.multiplier = multiplier;
	}
}

function combinations(total, motherAry) {

	let combos = 0;
	let ary = motherAry.map(denom => 
		new Node(
			total, 
			denom,
			undefined,
			motherAry.indexOf(denom)
		)
	)
	
	while (ary.length) {
		let node = ary.pop();
		if (node.multiplier === undefined) { 
			node.multiplier = Math.floor(node.amt/node.denom); 
			node.rem = node.amt - (node.multiplier*node.denom); 

			if (node.index > 0) {
			  for (i=node.multiplier-1; i>0; i--) {
				  ary.push(new Node(
				  	node.amt,    
				  	motherAry[node.index],
				  	node.amt - (node.denom * i),
				  	node.index,
				  	node.multiplier=i
				  ))
			  } 
			}
		}
		if (node.rem && node.index > 0) {
			for (i=node.index-1; i>=0; i--) {
				if (Math.floor(node.rem/motherAry[i]) > 0) {
					ary.push(new Node(
						node.rem, // amt 
						motherAry[i], // denom 
						undefined, // rem
						i
						// no multiplier for child nodes
					));
				}
			}
		};
		if (node.rem === 0) {
			combos++;
		};
	}
	return combos
}
