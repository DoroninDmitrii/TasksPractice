
const dependencies = {
  redux: ['typescript', 'eslint'],
  react: [],
  'react-redux': ['react', 'redux', 'typescript'],
  typescript: ['eslint'],
  webpack: ['react'],
  eslint: ['webpack']
};

const dependenciesInstalled = (dependencies) => {
  const hash = { ...dependencies };
  let result = [];

  while (Object.keys(hash).length > 0) {
    let installed = false;

    for (let key in hash) {
      if (hash[key].every(dep => result.includes(dep))) {
        result.push(key);
        delete hash[key];
        installed = true;
        break;
      }
    }

  }
  return result;
}

console.log(dependenciesInstalled(dependencies));
