const fetchMock = (callback) => {
  const dataMock = JSON.stringify({ data: "jsgrill" });

  setTimeout(() => {
    callback(dataMock);
  }, 2000);
};

const someFunction = () => {
  const result = fetchMock((data) => console.log(data))
  return result;
};

someFunction();
