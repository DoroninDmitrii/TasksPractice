const dependencies = {
  react: [],
  redux: ['typescript', 'eslint'],
  'react-redux': ['react', 'redux', 'typescript'],
  typescript: ['eslint'],
  webpack: ['react'],
  eslint: ['webpack'],
};

const instalDependencies = (deps) => {
  let result = new Set();
  
  while (result.size !== Object.keys(deps).length) {
    for (let key in deps){
      let values = deps[key];
      if (values.length === 0) {
        result.add(key);
      } 
      deps[key] = values.filter(el => !result.has(el));
    }
  }
  return result;
};

console.log(instalDependencies(dependencies));
