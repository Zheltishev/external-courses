import { mainWrap, indexNumber } from '../main.js';
import { dataMock, setDataMockJSON, setDataValue } from '../data/datamock.js';
import { TaskBoardModal } from './task-board-modal.js';
import { countingTasks } from './counting-tasks.js';

export class TaskBoard {
  constructor() {
    this.infoBoard = document.createElement('div');
    this.infoBoard.classList.add('info-board');
    this.popupModalTaskName = document.createElement('div');
    this.elementMenuRemove = document.createElement('li');
    this.elementMenuRemove.className = 'field-style select-task remove-board';
    this.elementMenuRemove.textContent = 'Remove board';
    this.index = indexNumber;
  }

  updateValueIndexNumber() {
    this.index = indexNumber;
  }

  createTaskBoardInfo(text = `Push button 'Create new list'`) {
    mainWrap.appendChild(this.infoBoard);
    this.infoBoard.textContent = text;
  }

  removeTaskBoardInfo() {
    this.infoBoard.remove();
  }

  addNewTaskPopup() {
    this.popupModalTaskName.innerHTML = '';

    const addNewTaskPopupTitle = document.createElement('p');
    addNewTaskPopupTitle.classList.add('add-new-task-popup-title');
    addNewTaskPopupTitle.textContent = 'Enter the name of the board';

    const inputTaskName = document.createElement('input');
    inputTaskName.classList.add('input-task-name');

    this.removeTaskBoardInfo();
    this.popupModalTaskName.classList.add('popup-modal-task-name');
    mainWrap.append(this.popupModalTaskName);
    this.popupModalTaskName.append(addNewTaskPopupTitle);
    this.popupModalTaskName.append(inputTaskName);
    inputTaskName.focus();
    inputTaskName.addEventListener('blur', () => {
      if (inputTaskName.value !== '') {
        const tepmObj = {
          title: `${inputTaskName.value}`,
          issues: [],
        };

        dataMock.unshift(tepmObj);
        setDataMockJSON();
        this.renderTaskBoard();
      }

      if (dataMock.length === 0) {
        this.createTaskBoardInfo();
      }

      this.popupModalTaskName.remove();
    });
  }

  renderTaskBoard() {
    mainWrap.innerHTML = '';
    dataMock.forEach((elem, index) => {
      let tempWrapModal = new TaskBoardModal(elem.title, index);

      tempWrapModal.renderModal();
    });

    countingTasks.countTasks();
  }

  taskBoardMenuOpen() {
    const iconCircle = document.querySelectorAll('.icon-circle');

    this.updateValueIndexNumber();
    iconCircle.forEach((elem, index) => {
      if (index !== this.index) {
        elem.classList.remove('open');
      }
    });

    const taskBlockMenu = document.querySelectorAll('.task-block-menu');
    taskBlockMenu[this.index].innerHTML = '';
    taskBlockMenu[this.index].append(this.elementMenuRemove);
  }

  taskBoardMenuClose() {
    const taskBlockMenu = document.querySelectorAll('.task-block-menu');
    const iconCircle = document.querySelectorAll('.icon-circle');

    this.updateValueIndexNumber();
    taskBlockMenu.forEach((elem) => {
      elem.classList.remove('open');
      let tempElem = elem;
      tempElem.innerHTML = '';
    });

    iconCircle.forEach((elem) => elem.classList.remove('open'));
  }

  removeTaskBoard() {
    setDataValue(this.index);
    setDataMockJSON();
    this.renderTaskBoard();
    if (dataMock.length === 0) {
      this.createTaskBoardInfo();
    }
  }
}
