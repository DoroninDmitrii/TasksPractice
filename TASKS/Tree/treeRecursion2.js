const tree = {
  value: 5,
  left: {
    value: 1,
	left: {
  		value: 5
    }
  },
  right: {
    value: 10,
    left: {
    	value: 20
    },
    right: {
    	value: 30,
    	left: {
            value: 1,
        	left: {
          		value: 5
            }
          },
          right: {
            value: 10,
            left: {
            	value: 20
            },
            right: {
            	value: 30
            }
          }
    }
  }
};



const sumAllTree =(tree) => {
    
    let resObj = 0;
    
    for (let key in tree) {
        if (key === 'value') {
            resObj += tree['value']
        } else if (key === 'left'|| key === 'right') {
             resObj +=  sumAllTree(tree[key])
        }
    }
  
 return resObj
}

console.log(sumAllTree(tree))
