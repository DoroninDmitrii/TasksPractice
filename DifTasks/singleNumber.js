const singleNumber = (arr) => {
  let result = []; 
  let sortArr = arr.sort((a, b) => {
    return a - b
  })
  console.log(sortArr)
 for (let i = 0; i < sortArr.ledngth; i = i + 2) {
    
 }
 return result
 } 
 
 
 console.log(singleNumber([2, 15, 2, 7, 15]))
