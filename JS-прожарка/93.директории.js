const getAbsolutePath = (path) => {
  const splitPath = path.split('/');
  const stack = [];

  for (let i = 0; i < splitPath.length; i++) {
    const current = splitPath[i];

    if (current === '.') {
      continue;
    }

    if (current === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(current);
    }
  }
  return stack.join('/')
}

console.log(getAbsolutePath("./components/../__tests__/../__tests__/../components/Navbar/./Link")); 
// "components/Navbar/Link"
