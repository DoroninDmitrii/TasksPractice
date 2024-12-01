const printStructure = (input, indentSize = 2) => {
  const stack = [{ node: input, level: 0 }];

  while (stack.length) {
    const { node, level } = stack.pop();

    console.log(`${' '.repeat(indentSize * level)}${node.name}`);

    const children = node.children ?? [];

    for (const node of children) {
      stack.push({ node, level: level + 1 });
    }
  }
}

console.log(printStructure({
  name: 'jsgrill',
  children: [
    { name: 'mentour.js' },
    { name: 'community.json' },
    {
      name: 'images',
      children: [
        { name: 'logo.png' },
        {
          name: 'codepen',
          children: [
            { name: 'background.svg' },
            { name: 'tmbn.png' }
          ],
        },
      ],
    },
    { name: 'channel.js' },
  ],
}));

/*
'jsgrill
  channel.js
  images
    codepen
      tmbn.png
      background.svg
    logo.png
  community.json
  mentour.js
'
*/

