function compareVersions(version1, version2) {
  let v1 = version1.slice(1).split('.').map(Number)
  let v2 = version2.slice(1).split('.').map(Number);

  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const p1 = v1[i] || 0;
    const p2 = v2[i] || 0;
  
    if (p1 < p2) {
      return 1;
    } else if (p1 > p2) {
      return -1;
    }
  }
  return 0;
}

console.log(compareVersions('v11.22.44', 'v11.22.45')); // Вывод: 1
console.log(compareVersions('v11.22.44', 'v11.22.44'));  // Вывод: 0
console.log(compareVersions("v11.22.45", "v11.22.44")); // Вывод: -1
