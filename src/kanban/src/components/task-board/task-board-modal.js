import { mainWrap } from '../main.js';
import { dataMock } from '../data/datamock.js';

export class TaskBoardModal {
  constructor(title, index) {
    this.title = title;
    this.index = index;
  }

  renderModal() {
    const taskBlock = document.createElement('div');
    taskBlock.className = 'task-block';
    mainWrap.appendChild(taskBlock);

    const taskBlockHeader = document.createElement('div');
    taskBlockHeader.className = 'task-block-header';
    taskBlock.appendChild(taskBlockHeader);

    const taskBlockHeaderTitle = document.createElement('div');
    taskBlockHeaderTitle.className = 'task-block-header-title';
    taskBlockHeader.appendChild(taskBlockHeaderTitle);

    const taskBlockHeaderTitleH2 = document.createElement('h2');
    taskBlockHeaderTitleH2.innerText = this.title;
    taskBlockHeaderTitle.appendChild(taskBlockHeaderTitleH2);

    const taskBlockHeaderButton = document.createElement('div');
    taskBlockHeaderButton.className = 'task-block-header-button';
    taskBlockHeader.appendChild(taskBlockHeaderButton);

    const iconCircle = document.createElement('div');
    iconCircle.className = 'icon-circle';
    iconCircle.dataset.index = this.index;
    taskBlockHeaderButton.appendChild(iconCircle);

    const taskBlockMenu = document.createElement('div');
    taskBlockMenu.className = 'task-block-menu';
    taskBlockMenu.dataset.index = this.index;
    taskBlock.appendChild(taskBlockMenu);

    const taskBlockList = document.createElement('div');
    taskBlockList.className = 'task-block-list';
    taskBlock.appendChild(taskBlockList);

    const markerTaskList = document.createElement('ul');
    markerTaskList.className = 'marker-task-list';
    taskBlockList.appendChild(markerTaskList);

    dataMock[this.index].issues.forEach((elem) => {
      const nameTask = document.createElement('li');
      nameTask.className = 'name-task';
      nameTask.innerText = elem.name;
      markerTaskList.appendChild(nameTask);
    });

    const fieldAddingNewTask = document.createElement('div');
    fieldAddingNewTask.className = 'field-adding-new-task';
    fieldAddingNewTask.dataset.index = this.index;
    taskBlockList.appendChild(fieldAddingNewTask);

    const wrapAdd = document.createElement('div');
    wrapAdd.className = 'wrap-add';
    taskBlockList.appendChild(wrapAdd);

    const taskBlockAdd = document.createElement('button');
    taskBlockAdd.className = 'task-block-add';
    taskBlockAdd.dataset.index = this.index;
    taskBlockAdd.innerText = 'Add card';
    wrapAdd.appendChild(taskBlockAdd);

    if (this.index > 0 && dataMock[this.index - 1].issues.length === 0) {
      taskBlockAdd.setAttribute('disabled', 'disabled');
    }
  }
}
