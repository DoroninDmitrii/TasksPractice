const getNumMax = (num) => {  
  let result = String(num).split('').filter((item) => !isNaN(item)).sort((a, b) => b - a).join('');
  return Number(result);
}





console.log(getNumMax(6118)); // 8611
console.log(getNumMax(17.5)); // 751
