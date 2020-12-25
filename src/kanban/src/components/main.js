import {
  headerMenu,
  createDropdownMenu,
  rotetedArrow,
} from './header-menu/header-menu.js';
import { TaskBoard } from './task-board/task-board.js';
import { dataMock, getDataMockJSON } from './data/datamock.js';
import { AddingNewTask } from './task-list/task-list.js';
import '../style/style.css';
import '../index.html';

const mainWrap = document.querySelector('.main-wrap');
let indexNumber;
const taskBoard = new TaskBoard();
const addingNewTask = new AddingNewTask();

getDataMockJSON();

if (dataMock.length === 0) {
  taskBoard.createTaskBoardInfo();
} else {
  taskBoard.renderTaskBoard();
}

const btnCreateList = document.querySelector('.btn-create-list');

btnCreateList.addEventListener('click', () => {
  taskBoard.addNewTaskPopup();
});

mainWrap.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-block-add')) {
    indexNumber = Number(event.target.dataset.index);
    taskBoard.taskBoardMenuClose();
    if (indexNumber === 0) {
      addingNewTask.addingTaskForFirstBlock();
    } else {
      addingNewTask.addingTaskFromPreviousBlock();
    }
  }

  if (event.target.classList.contains('icon-circle')) {
    indexNumber = Number(event.target.dataset.index);

    if (event.target.classList.contains('open')) {
      event.target.classList.remove('open');
      taskBoard.taskBoardMenuClose();
    } else {
      event.target.classList.add('open');
      taskBoard.taskBoardMenuOpen();
    }
  }

  if (event.target.classList.contains('remove-board')) {
    indexNumber = Number(event.target.dataset.index);
    taskBoard.removeTaskBoard();
  }
});

headerMenu.addEventListener('click', createDropdownMenu);
headerMenu.addEventListener('click', rotetedArrow);

export { mainWrap, indexNumber };
