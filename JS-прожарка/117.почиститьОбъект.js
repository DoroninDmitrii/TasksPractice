const cleanObject = (obj) => {
  for (let key in obj) {
    const value = obj[key];

    if (value === null || value === undefined || value === '') {
      delete obj[key];
    }

    if (typeof value === 'object' && value !== null) {
      cleanObject(value);

      if ((Array.isArray(value) && value.length === 0) || (!Array.isArray(value) && Object.keys(value).length === 0)) {
        delete obj[key];
      }
    }

    if (Array.isArray(value)) {
      obj[key] = value
        .filter((item) => item !== null && item !== undefined && item !== "")
        .map((item) => (typeof item === "object" ? cleanObject(item) : item));

      if (obj[key].length === 0) {
        delete obj[key];
      }
    }
  }
  return obj;
};


console.log(
  cleanObject({
    a: 0,
    j: 1,
    b: null,
    c: undefined,
    d: "",
    e: false,
    f: {},
    g: [],
    h: [2, 3, null, 4, "", false, true],
    i: { j: 0, k: { l: [] } },
    m: { n: { o: [] } },
    p: { q: "", r: { s: [{ t: 5 }] } },
    u: "jsgrill"
  })
);

// {
//   a: 0,
//   j: 1,
//   e: false,
//   h: [2, 3, 4, false, true],
//   i: { j: 0 },
//   p: { r: { s: [{ t: 5 }] } },
//   u: 'jsgrill',
// }
