let dataMock = [];

function setDataValue(val) {
  let tempArr = dataMock
    .filter((elem, index) => {
      return index !== val;
    })
    .map((elem) => {
      return elem;
    });

  dataMock = tempArr;
}

function getDataMockJSON() {
  dataMock = JSON.parse(localStorage.getItem('dataInfo'));

  if (dataMock === null) {
    dataMock = [];

    localStorage.setItem('dataInfo', JSON.stringify(dataMock));
  }
}

function setDataMockJSON() {
  localStorage.setItem('dataInfo', JSON.stringify(dataMock));
}

export { dataMock, getDataMockJSON, setDataMockJSON, setDataValue };
