function ImitatorFetch(url, method = 'GET', body = null) {
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.open(method, url);
    xhr.send(body);
    xhr.onload = () => {
      if (xhr.readyState !== 4 && xhr.status >= 400) {
        reject();

        return;
      }

      resolve(console.log(xhr.response));
    };
  });
}

const urlData = 'https://jsonplaceholder.typicode.com/users';
ImitatorFetch(urlData);
