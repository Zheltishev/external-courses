import { dataMock, setDataMockJSON } from '../data/datamock.js';
import { indexNumber } from '../main.js';
import { countingTasks } from '../task-board/counting-tasks.js';

export class AddingNewTask {
  constructor() {
    this.fieldAddingNewTask = document.querySelectorAll(
      '.field-adding-new-task'
    );
    this.markerTaskList = document.querySelectorAll('.marker-task-list');
    this.buttonTaskBlockAdd = document.querySelectorAll('.task-block-add');
  }

  clearFieldNewTask() {
    this.fieldAddingNewTask.forEach((el) => {
      let tempElement = el;

      tempElement.innerHTML = '';
    });

    // let taskBlockMenu = document.querySelectorAll('.task-block-menu');
    // taskBlockMenu.forEach((el) => {
    //   let tempElement = el;

    //   tempElement.innerHTML = '';
    // });
  }

  checkButtonAddStatus() {
    this.buttonTaskBlockAdd.forEach((elem, index) => {
      if (index === 0) {
        return;
      }

      if (dataMock[index - 1].count === 0) {
        this.buttonTaskBlockAdd[index].setAttribute('disabled', 'disabled');
      } else {
        this.buttonTaskBlockAdd[index].removeAttribute('disabled', 'disabled');
      }
    });
  }

  updateValueVariable() {
    this.fieldAddingNewTask = document.querySelectorAll(
      '.field-adding-new-task'
    );
    this.markerTaskList = document.querySelectorAll('.marker-task-list');
    this.buttonTaskBlockAdd = document.querySelectorAll('.task-block-add');
  }

  addingTaskForFirstBlock() {
    this.clearFieldNewTask();
    this.updateValueVariable();

    const inputNewTask = document.createElement('input');

    inputNewTask.className = 'input-new-task field-style';
    inputNewTask.setAttribute('placeholder', 'Enter a new task');
    this.fieldAddingNewTask[0].append(inputNewTask);
    inputNewTask.focus();
    inputNewTask.addEventListener('blur', () => {
      if (inputNewTask.value === '') {
        this.fieldAddingNewTask[0].innerHTML = '';
      } else {
        const nameTask = document.createElement('li');

        nameTask.className = 'name-task';
        nameTask.innerText = inputNewTask.value;
        this.markerTaskList[0].appendChild(nameTask);
        this.fieldAddingNewTask[0].innerHTML = '';
        dataMock[0].count++;

        let newTaskData = {
          id: `task${dataMock[0].count}`,
          name: `${inputNewTask.value}`,
        };

        dataMock[0].issues.push(newTaskData);
        setDataMockJSON();
        this.checkButtonAddStatus();
        countingTasks.coutingNumberTask();
      }
    });
  }

  addingTaskFromPreviousBlock() {
    this.clearFieldNewTask();
    this.updateValueVariable();

    const selectTaskListItem = document.createElement('li');

    selectTaskListItem.className = 'field-style select-task';
    selectTaskListItem.innerText = 'Choice task';
    this.fieldAddingNewTask[indexNumber].appendChild(selectTaskListItem);

    const selectTaskListDiv = document.createElement('div');

    selectTaskListDiv.className = 'select-task-list';
    selectTaskListDiv.dataset.index = indexNumber;
    this.fieldAddingNewTask[indexNumber].appendChild(selectTaskListDiv);

    let selectTask = document.querySelector('.select-task');
    let selectTaskList = document.querySelector('.select-task-list');

    selectTask.addEventListener('click', () => {
      selectTask.classList.toggle('active');
      if (selectTask.classList.contains('active')) {
        dataMock[indexNumber - 1].issues.forEach((elem) => {
          const tempTaskListItem = document.createElement('li');

          tempTaskListItem.className = 'field-style temp-task';
          tempTaskListItem.innerText = elem.name;
          selectTaskList.appendChild(tempTaskListItem);

          return;
        });

        let tempTask = document.querySelectorAll('.temp-task');

        tempTask.forEach((value) => {
          value.addEventListener('click', () => {
            const nameTask = document.createElement('li');

            nameTask.className = 'name-task';
            nameTask.innerText = value.textContent;
            this.markerTaskList[indexNumber].appendChild(nameTask);
            dataMock[indexNumber].count++;

            let newTaskData = {
              id: `task${dataMock[indexNumber].count}`,
              name: `${value.textContent}`,
            };

            dataMock[indexNumber].issues.push(newTaskData);
            dataMock[indexNumber - 1].count--;

            let tempArray = dataMock[indexNumber - 1].issues.filter((val) => {
              return val.name !== value.textContent;
            });

            dataMock[indexNumber - 1].issues = tempArray;
            setDataMockJSON();
            this.fieldAddingNewTask[indexNumber].innerHTML = '';
            this.markerTaskList[indexNumber - 1].innerHTML = '';

            dataMock[indexNumber - 1].issues.forEach((el) => {
              const nameTaskPrev = document.createElement('li');

              nameTaskPrev.className = 'name-task';
              nameTaskPrev.innerText = el.name;
              this.markerTaskList[indexNumber - 1].appendChild(nameTaskPrev);

              return;
            });

            this.checkButtonAddStatus();
            countingTasks.coutingNumberTask();
          });
        });
      } else {
        selectTaskList.innerHTML = '';
      }
    });
  }
}
