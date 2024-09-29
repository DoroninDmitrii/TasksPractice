const instalDependencies = (deps) => {
  const visited = new Set();
  const result = [];

  const dfs = (pkg) => {
    if (visited.has(pkg)) {
      return
    };

    visited.add(pkg);

    if (deps[pkg]) {
      deps[pkg].forEach(dep => {
        dfs(dep)
      })
    }
    result.push(pkg);
  }

  Object.keys(deps).forEach(pkg => {
    if (!visited.has(pkg)) {
      dfs(pkg);
    }
  })
  return result;
}

const dependencies = {
  react: [],
  redux: ['typescript', 'eslint'],
  'react-redux': ['react', 'redux', 'typescript'],
  typescript: ['eslint'],    
  webpack: ['react'],
  eslint: ['webpack'], 
};

console.log(instalDependencies(dependencies));
