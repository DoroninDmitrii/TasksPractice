const path = "/neetcode/practice//...///../courses";

// Output: "/.../b/d"

// const simplifyPath = function(path) {
//     const component = path.split('/');
//     const stack = [];
    
//     for (let i = 0; i < component.length; i++) {
//       const current = component[i];
      
//       if (current === '' || current === '.') {
//         continue;
//       }
      
//       if (current === '..') {
//         if (stack.length) {
//           stack.pop();
//         }
//       } else {
//         stack.push(current);
//       }
//     }
    
//     return '/' + stack.join('/');
// };

// console.log(simplifyPath(path));

const simplifyPath = (path) => {
      const stack = []
      let newPath = path.split('/')

      for (let i = 0; i < newPath.length; i++) {
          const curr = newPath[i];
          if (curr === '' || curr === '.') {
                continue;
            }
            if (curr === '..') {
                stack.pop()
            } else {
                stack.push(curr)
            }
        }
    return'/' + stack.join('/')
 }

 console.log(simplifyPath(path));
