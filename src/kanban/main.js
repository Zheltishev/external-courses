const dropdownMenuAnchor = [
  { text: "My account", anchor: "#" },
  { text: "My task", anchor: "#" },
  { text: "Log out", anchor: "#" },
];
const headerMenu = document.querySelector(".header-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenuList = document.querySelector(".dropdown-menu-list");
const buttonHeaderMenu = document.querySelector(".button-header-menu");

function createDropdownMenu() {
  if (dropdownMenu.classList.contains("dropdown-menu-active")) {
    dropdownMenu.classList.remove("dropdown-menu-active");
    while (dropdownMenuList.firstChild) {
      dropdownMenuList.removeChild(dropdownMenuList.firstChild);
    }
  } else {
    dropdownMenu.classList.add("dropdown-menu-active");
    for (let i = 0; i < dropdownMenuAnchor.length; i++) {
      dropdownMenuList.insertAdjacentHTML(
        "beforeend",
        `
        <a href="${dropdownMenuAnchor[i].anchor}"><li>${dropdownMenuAnchor[i].text}</li></a>
      `
      );
    }
  }

  return;
}

function rotetedArrow() {
  if (buttonHeaderMenu.classList.contains("rotated-up")) {
    buttonHeaderMenu.classList.remove("rotated-up");
  } else {
    buttonHeaderMenu.classList.add("rotated-up");
  }

  return;
}

headerMenu.addEventListener("click", createDropdownMenu);
headerMenu.addEventListener("click", rotetedArrow);

// ex-13
// заглушка

dataMock = JSON.parse(localStorage.getItem("dataInfo"));

if (dataMock === null) {
  dataMock = [
    {
      count: 2,
      title: "backlog",
      issues: [
        { id: "task1", name: "Login page - performance issues" },
        { id: "task2", name: "Sprint bugfix" },
      ],
    },
    {
      count: 2,
      title: "ready",
      issues: [
        { id: "task1", name: "task1" },
        { id: "task2", name: "bugfix" },
      ],
    },
    {
      count: 1,
      title: "finish",
      issues: [{ id: "task1", name: "test" }],
    },
  ];
}

localStorage.setItem("dataInfo", JSON.stringify(dataMock));

// создание блоков с задачами
const mainWrap = document.querySelector(".main-wrap");

function renderTaskBlock() {
  // удаление старых блоков
  // полное отрисовывание на будущее, когда новые блоки будут добавлять по кнопке Create new list
  while (mainWrap.firstChild) {
    mainWrap.removeChild(mainWrap.firstChild);
  }

  dataMock.forEach((elem, index) => {
    let taskBlock = document.createElement("div");
    taskBlock.className = "task-block";
    mainWrap.appendChild(taskBlock);

    const taskBlockHeader = document.createElement("div");
    taskBlockHeader.className = "task-block-header";
    taskBlock.appendChild(taskBlockHeader);

    const taskBlockHeaderTitle = document.createElement("div");
    taskBlockHeaderTitle.className = "task-block-header-title";
    taskBlockHeaderTitle.innerText =
      elem.title.charAt(0).toUpperCase() + elem.title.slice(1);
    taskBlockHeader.appendChild(taskBlockHeaderTitle);

    const taskBlockHeaderButton = document.createElement("div");
    taskBlockHeaderButton.className = "task-block-header-button";
    taskBlockHeader.appendChild(taskBlockHeaderButton);

    // index на будущее для ex18 при удалении task block
    const iconCircle = document.createElement("div");
    iconCircle.className = "icon-circle";
    iconCircle.dataset.index = index;
    taskBlockHeaderButton.appendChild(iconCircle);

    const taskBlockList = document.createElement("div");
    taskBlockList.className = "task-block-list";
    taskBlock.appendChild(taskBlockList);

    const markerTaskList = document.createElement("ul");
    markerTaskList.className = "marker-task-list";
    taskBlockList.appendChild(markerTaskList);

    dataMock[index].issues.forEach((elem) => {
      const nameTask = document.createElement("li");
      nameTask.className = "name-task";
      nameTask.innerText = elem.name;
      markerTaskList.appendChild(nameTask);
    });

    const fieldAddingNewTask = document.createElement("div");
    fieldAddingNewTask.className = "field-adding-new-task";
    fieldAddingNewTask.dataset.index = index;
    taskBlockList.appendChild(fieldAddingNewTask);

    const wrapAdd = document.createElement("div");
    wrapAdd.className = "wrap-add";
    taskBlockList.appendChild(wrapAdd);

    const taskBlockAdd = document.createElement("button");
    taskBlockAdd.className = "task-block-add";
    taskBlockAdd.dataset.index = index;
    taskBlockAdd.innerText = "Add card";
    wrapAdd.appendChild(taskBlockAdd);

    return;
  });
}

renderTaskBlock();

const buttonTaskBlockAdd = document.querySelectorAll(".task-block-add");
const fieldAddingNewTask = document.querySelectorAll(".field-adding-new-task");
const markerTaskList = document.querySelectorAll(".marker-task-list");
let indexNumber;

// создание поля для новой задачи в зависимости от блока
function choiceTypeFieldNewTask(event) {
  indexNumber = Number(event.target.dataset.index);
  if (indexNumber === 0) {
    addingTaskForFirstBlock();
  } else {
    addingTaskFromPreviousBlock();
  }

  return;
}

for (let i = 0; i < buttonTaskBlockAdd.length; i++) {
  buttonTaskBlockAdd[i].addEventListener("click", choiceTypeFieldNewTask);
}

// добавление задачи если блок первый
function addingTaskForFirstBlock() {
  clearFieldNewTask();

  // создание input для ввода новой задачи
  fieldAddingNewTask[0].insertAdjacentHTML(
    "afterbegin",
    `
    <input class="input-new-task field-style" type="text" placeholder="Enter a new task" />
  `
  );

  let inputNewTask = document.querySelector(".input-new-task");
  inputNewTask.focus();

  inputNewTask.addEventListener("blur", () => {
    // если поле пустое удаление поля для задачи
    if (inputNewTask.value === "") {
      while (fieldAddingNewTask[0].firstChild) {
        fieldAddingNewTask[0].removeChild(fieldAddingNewTask[0].firstChild);
      }
    } else {
      // добавление новой задачи в основной список
      markerTaskList[0].insertAdjacentHTML(
        "beforeend",
        `
        <li class="name-task">${inputNewTask.value}</li>
      `
      );

      // удаление поля input
      while (fieldAddingNewTask[0].firstChild) {
        fieldAddingNewTask[0].removeChild(fieldAddingNewTask[0].firstChild);
      }

      // добавление новой задачи в dataMock
      dataMock[0].count++;

      let newTaskData = {
        id: `task${dataMock[0].count}`,
        name: `${inputNewTask.value}`,
      };

      dataMock[0].issues.push(newTaskData);

      // загрузка dataMock в localStorage
      localStorage.setItem("dataInfo", JSON.stringify(dataMock));

      checkButtonAddStatus();
    }

    return;
  });

  return;
}

// Добавление задачи из предыдущего списка
function addingTaskFromPreviousBlock() {
  clearFieldNewTask();

  // добавление select list
  fieldAddingNewTask[indexNumber].insertAdjacentHTML(
    "beforeend",
    `
  <li class="field-style select-task">Choice task &#8595;</li>
  <div data-index="${indexNumber}" class="select-task-list"></div>
`
  );

  let selectTask = document.querySelectorAll(".select-task");
  let selectTaskList = document.querySelectorAll(".select-task-list");

  for (let i = 0; i < selectTask.length; i++) {
    selectTask[i].addEventListener("click", (ev) => {
      selectTask[i].classList.toggle("active");
      indexNumber = Number(ev.target.parentNode.dataset.index);

      if (selectTask[i].classList.contains("active")) {
        // создание select с выводом задач из предыдущего блока
        dataMock[indexNumber - 1].issues.forEach((elem) => {
          selectTaskList[i].insertAdjacentHTML(
            "beforeend",
            `
          <li class="field-style temp-task">${elem.name}</li>
        `
          );

          return;
        });

        // выбор и добавление задачи в основной список
        let tempTask = document.querySelectorAll(".temp-task");
        for (let j = 0; j < tempTask.length; j++) {
          tempTask[j].addEventListener("click", () => {
            // добавление новой задачи в основной список
            markerTaskList[indexNumber].insertAdjacentHTML(
              "beforeend",
              `
              <li class="name-task">${tempTask[j].textContent}</li>
            `
            );

            // добавление новой задачи в dataMock
            dataMock[indexNumber].count++;
            let newTaskData = {
              id: `task${dataMock[indexNumber].count}`,
              name: `${tempTask[j].textContent}`,
            };

            dataMock[indexNumber].issues.push(newTaskData);

            // удаление выбраной задачи из предшествуюшего блока
            dataMock[indexNumber - 1].count--;

            let tempArray = dataMock[indexNumber - 1].issues.filter((val) => {
              return val.name !== tempTask[j].textContent;
            });

            dataMock[indexNumber - 1].issues = tempArray;

            // загрузка dataMock в localStorage
            localStorage.setItem("dataInfo", JSON.stringify(dataMock));

            // удаление поля input
            while (fieldAddingNewTask[indexNumber].firstChild) {
              fieldAddingNewTask[indexNumber].removeChild(
                fieldAddingNewTask[indexNumber].firstChild
              );
            }

            // удаление выбраной задачи из предыдущего блока
            while (markerTaskList[indexNumber - 1].firstChild) {
              markerTaskList[indexNumber - 1].removeChild(
                markerTaskList[indexNumber - 1].firstChild
              );
            }

            dataMock[indexNumber - 1].issues.forEach((el) => {
              markerTaskList[indexNumber - 1].insertAdjacentHTML(
                "beforeend",
                `
                <li class="name-task">${el.name}</li>
              `
              );

              return;
            });

            checkButtonAddStatus();

            return;
          });
        }
      } else {
        // удаление select list
        while (selectTaskList[i].firstChild) {
          selectTaskList[i].removeChild(selectTaskList[i].firstChild);
        }
      }
    });
  }

  return;
}

// переключение disabled для кнопки add card
function checkButtonAddStatus() {
  buttonTaskBlockAdd.forEach((elem, index) => {
    if (index === 0) {
      return;
    }

    if (dataMock[index - 1].count === 0) {
      buttonTaskBlockAdd[index].setAttribute("disabled", "disabled");
    } else {
      buttonTaskBlockAdd[index].removeAttribute("disabled", "disabled");
    }

    return;
  });
}

checkButtonAddStatus();

function clearFieldNewTask() {
  // очистка блока чтобы не создавалось несколько кнопок
  // если пользователь несколько раз нажимает на add card
  // если пользователь нажимает add card в другом блоке задач
  fieldAddingNewTask.forEach((el) => {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  });

  return;
}
