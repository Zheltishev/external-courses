import { dataMockPlug } from './datamockplug.js';
export { dataMock, renderTaskBlock };

let dataMock = JSON.parse(localStorage.getItem('dataInfo'));

if (dataMock === null) {
  dataMock = dataMockPlug;

  localStorage.setItem('dataInfo', JSON.stringify(dataMock));
}

// создание блоков с задачами
const mainWrap = document.querySelector('.main-wrap');

function renderTaskBlock() {
  // удаление старых блоков
  // полное отрисовывание на будущее, когда новые блоки будут добавлять по кнопке Create new list
  mainWrap.innerHTML = '';

  dataMock.forEach((elem, index) => {
    let taskBlock = document.createElement('div');
    taskBlock.className = 'task-block';
    mainWrap.appendChild(taskBlock);

    const taskBlockHeader = document.createElement('div');
    taskBlockHeader.className = 'task-block-header';
    taskBlock.appendChild(taskBlockHeader);

    const taskBlockHeaderTitle = document.createElement('div');
    taskBlockHeaderTitle.className = 'task-block-header-title';
    taskBlockHeader.appendChild(taskBlockHeaderTitle);

    const taskBlockHeaderTitleH2 = document.createElement('h2');
    taskBlockHeaderTitleH2.innerText = elem.title;
    taskBlockHeaderTitle.appendChild(taskBlockHeaderTitleH2);

    const taskBlockHeaderButton = document.createElement('div');
    taskBlockHeaderButton.className = 'task-block-header-button';
    taskBlockHeader.appendChild(taskBlockHeaderButton);

    // index на будущее для ex18 при удалении task block
    const iconCircle = document.createElement('div');
    iconCircle.className = 'icon-circle';
    iconCircle.dataset.index = index;
    taskBlockHeaderButton.appendChild(iconCircle);

    const taskBlockList = document.createElement('div');
    taskBlockList.className = 'task-block-list';
    taskBlock.appendChild(taskBlockList);

    const markerTaskList = document.createElement('ul');
    markerTaskList.className = 'marker-task-list';
    taskBlockList.appendChild(markerTaskList);

    dataMock[index].issues.forEach((elem) => {
      const nameTask = document.createElement('li');
      nameTask.className = 'name-task';
      nameTask.innerText = elem.name;
      markerTaskList.appendChild(nameTask);
    });

    const fieldAddingNewTask = document.createElement('div');
    fieldAddingNewTask.className = 'field-adding-new-task';
    fieldAddingNewTask.dataset.index = index;
    taskBlockList.appendChild(fieldAddingNewTask);

    const wrapAdd = document.createElement('div');
    wrapAdd.className = 'wrap-add';
    taskBlockList.appendChild(wrapAdd);

    const taskBlockAdd = document.createElement('button');
    taskBlockAdd.className = 'task-block-add';
    taskBlockAdd.dataset.index = index;
    taskBlockAdd.innerText = 'Add card';
    wrapAdd.appendChild(taskBlockAdd);

    return;
  });
}

renderTaskBlock();
