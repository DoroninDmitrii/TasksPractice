let str = 'awesome';
let str2 = 'rithmschool';

function reverse(str){
  
  if (str.length <= 1) {
    return str;
  }
  
  for (let i = 0; i < str.length; i++) {
    return reverse(str.slice(1)) + str[0]
  }
}

console.log(reverse('awesome'));
