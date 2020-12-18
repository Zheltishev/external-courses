let dataMock = [];

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

export { dataMock, getDataMockJSON, setDataMockJSON };
