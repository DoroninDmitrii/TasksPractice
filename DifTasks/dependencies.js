const dependencies = {
  react: [],
  redux: ['typescript', 'eslint'],
  'react-redux': ['react', 'redux', 'typescript'],
  typescript: ['eslint'],    
  webpack: ['react'],
  eslint: ['webpack'], 
};


const instalDependencies = (deps) => {
  const queue = [];
  const result = [];

  while (Object.keys(deps).length || queue.length) {
    const depName = queue.shift();

    if (depName) {
      result.push(depName);
    }

    Object.entries(deps).forEach(([key, valArr]) => {
      deps[key] = valArr.filter((item) => item !== depName);

      if (!deps[key].length) {
        queue.push(key);
        delete deps[key];
      }
    });
  }

  return result;
};


console.log(instalDependencies(dependencies));
