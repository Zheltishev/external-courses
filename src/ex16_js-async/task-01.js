function ImitatorFetch(url, method = 'GET', body = null) {
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.open(method, url);
    xhr.send(body);
    xhr.onload = () => {
      if (xhr.readyState !== 4 && xhr.status >= 400) {
        reject(xhr.statusText);

        return;
      }

      resolve(xhr.response);
    };
  }).then((data) => {
    console.log(data);
  });
}

const urlData = 'https://jsonplaceholder.typicode.com/users';
ImitatorFetch(urlData);
