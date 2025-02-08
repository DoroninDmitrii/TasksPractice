const path = "/.../a/../b/c/../d/./"

// Output: "/.../b/d"

const simplifyPath = function(path) {
    const component = path.split('/');
    const stack = [];
    
    for (let i = 0; i < component.length; i++) {
      const current = component[i];
      
      if (current === '' || current === '.') {
        continue;
      }
      
      if (current === '..') {
        if (stack.length) {
          stack.pop();
        }
      } else {
        stack.push(current);
      }
    }
    
    return '/' + stack.join('/');
};

console.log(simplifyPath(path));
