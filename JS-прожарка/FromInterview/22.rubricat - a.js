const Node = [{
  title: 'вещи',
  children: [{
    title: 'одежда',
    children: [
      {
        title: 'мужская',
        children: []
      },
      {
        title: 'женская',
        children: []
      },
    ]
  }]
},
{
  title: 'хобби',
  children: [{
    title: 'велосипеды',
    children: [{
      title: 'горные',
      children: []
    }]
  },
  {
    title: 'мангалы',
    children: []
  }
  ]
},
{
  title: 'транспорт',
  children: []
}
]

function printTree(rootNodes) {
  const stack = [];

  rootNodes.forEach(node => stack.push({ node, path: node.title }));

  while (stack.length > 0) {
    const { node, path } = stack.pop();

    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        stack.push({node: child, path: `${path} => ${child.title}`});
      })
    } else {
      console.log(path);
    }
  }
}

console.log(printTree(Node))
