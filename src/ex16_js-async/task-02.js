const list = document.querySelector('.list');
const searchAble = document.querySelector('.search-able');
const dataUrl = 'https://jsonplaceholder.typicode.com/users';

const debounce = (fn, ms) => {
  let timeout;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };

    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

function render() {
  list.innerHTML = '';

  fetch(dataUrl)
    .then((response) => response.json())
    .then((result) => {
      result.forEach((elem) => {
        if (searchAble.value === '' || elem.name.includes(searchAble.value)) {
          list.insertAdjacentHTML(
            'beforeend',
            `
              <li>${elem.name}</li>
            `
          );
        }
      });
    });
}

render();
onChange = debounce(render, 1000);
searchAble.addEventListener('keyup', onChange);
