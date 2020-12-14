import { dataMock } from './render.js';

const buttonTaskBlockAdd = document.querySelectorAll('.task-block-add');
const fieldAddingNewTask = document.querySelectorAll('.field-adding-new-task');
const markerTaskList = document.querySelectorAll('.marker-task-list');
let indexNumber;

// создание поля для новой задачи в зависимости от блока
function choiceTypeFieldNewTask(event) {
  indexNumber = Number(event.target.dataset.index);
  if (indexNumber === 0) {
    addingTaskForFirstBlock();
  } else {
    addingTaskFromPreviousBlock();
  }
}

buttonTaskBlockAdd.forEach((elem) => {
  elem.addEventListener('click', choiceTypeFieldNewTask);
});

// добавление задачи если блок первый
function addingTaskForFirstBlock() {
  clearFieldNewTask();

  // создание input для ввода новой задачи
  const inputNewTask = document.createElement('input');
  inputNewTask.className = 'input-new-task field-style';
  inputNewTask.setAttribute('placeholder', 'Enter a new task');
  fieldAddingNewTask[0].appendChild(inputNewTask);
  inputNewTask.focus();

  inputNewTask.addEventListener('blur', () => {
    // если поле пустое удаление поля для задачи
    if (inputNewTask.value === '') {
      fieldAddingNewTask[0].innerHTML = '';
    } else {
      // добавление новой задачи в основной список
      const nameTask = document.createElement('li');
      nameTask.className = 'name-task';
      nameTask.innerText = inputNewTask.value;
      markerTaskList[0].appendChild(nameTask);

      // удаление поля input
      fieldAddingNewTask[0].innerHTML = '';

      // добавление новой задачи в dataMock
      dataMock[0].count++;

      let newTaskData = {
        id: `task${dataMock[0].count}`,
        name: `${inputNewTask.value}`,
      };

      dataMock[0].issues.push(newTaskData);

      // загрузка dataMock в localStorage
      localStorage.setItem('dataInfo', JSON.stringify(dataMock));

      checkButtonAddStatus();
    }
  });
}

// Добавление задачи из предыдущего списка
function addingTaskFromPreviousBlock() {
  clearFieldNewTask();

  // добавление select list
  const selectTaskListItem = document.createElement('li');
  selectTaskListItem.className = 'field-style select-task';
  selectTaskListItem.innerText = 'Choice task';
  fieldAddingNewTask[indexNumber].appendChild(selectTaskListItem);

  const selectTaskListDiv = document.createElement('div');
  selectTaskListDiv.className = 'select-task-list';
  selectTaskListDiv.dataset.index = indexNumber;
  fieldAddingNewTask[indexNumber].appendChild(selectTaskListDiv);

  let selectTask = document.querySelector('.select-task');
  let selectTaskList = document.querySelector('.select-task-list');

  selectTask.addEventListener('click', () => {
    selectTask.classList.toggle('active');
    if (selectTask.classList.contains('active')) {
      // создание select с выводом задач из предыдущего блока
      dataMock[indexNumber - 1].issues.forEach((elem) => {
        const tempTaskListItem = document.createElement('li');
        tempTaskListItem.className = 'field-style temp-task';
        tempTaskListItem.innerText = elem.name;
        selectTaskList.appendChild(tempTaskListItem);

        return;
      });

      // выбор и добавление задачи в основной список
      let tempTask = document.querySelectorAll('.temp-task');

      tempTask.forEach((value) => {
        value.addEventListener('click', () => {
          // добавление новой задачи в основной список
          const nameTask = document.createElement('li');
          nameTask.className = 'name-task';
          nameTask.innerText = value.textContent;
          markerTaskList[indexNumber].appendChild(nameTask);

          // добавление новой задачи в dataMock
          dataMock[indexNumber].count++;
          let newTaskData = {
            id: `task${dataMock[indexNumber].count}`,
            name: `${value.textContent}`,
          };

          dataMock[indexNumber].issues.push(newTaskData);

          // удаление выбраной задачи из предшествуюшего блока
          dataMock[indexNumber - 1].count--;

          let tempArray = dataMock[indexNumber - 1].issues.filter((val) => {
            return val.name !== value.textContent;
          });

          dataMock[indexNumber - 1].issues = tempArray;

          // загрузка dataMock в localStorage
          localStorage.setItem('dataInfo', JSON.stringify(dataMock));

          // удаление поля input
          fieldAddingNewTask[indexNumber].innerHTML = '';

          // удаление выбраной задачи из предыдущего блока
          markerTaskList[indexNumber - 1].innerHTML = '';

          dataMock[indexNumber - 1].issues.forEach((el) => {
            const nameTaskPrev = document.createElement('li');
            nameTaskPrev.className = 'name-task';
            nameTaskPrev.innerText = el.name;
            markerTaskList[indexNumber - 1].appendChild(nameTaskPrev);

            return;
          });

          checkButtonAddStatus();
        });
      });
    } else {
      // удаление select list
      selectTaskList.innerHTML = '';
    }
  });
}

// переключение disabled для кнопки add card
function checkButtonAddStatus() {
  buttonTaskBlockAdd.forEach((elem, index) => {
    if (index === 0) {
      return;
    }

    if (dataMock[index - 1].count === 0) {
      buttonTaskBlockAdd[index].setAttribute('disabled', 'disabled');
    } else {
      buttonTaskBlockAdd[index].removeAttribute('disabled', 'disabled');
    }
  });
}

checkButtonAddStatus();

function clearFieldNewTask() {
  // очистка блока чтобы не создавалось несколько кнопок
  // если пользователь несколько раз нажимает на add card
  // если пользователь нажимает add card в другом блоке задач
  fieldAddingNewTask.forEach((el) => {
    let tempElement = el;
    tempElement.innerHTML = '';
  });
}
