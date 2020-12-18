import { dataMock } from '../data/datamock.js';

class CountingTasks {
  constructor() {
    this.numberActiveTask = document.querySelector('.number-active-task');
    this.numberFinishedTask = document.querySelector('.number-finished-task');
  }

  coutingNumberTask() {
    let countActiveTask = 0;
    let countFinishTask = 0;

    dataMock.forEach((elem, index) => {
      if (index !== 0 && index !== dataMock.length - 1) {
        countActiveTask += elem.count;
      }

      if (dataMock.length > 0 && index === dataMock.length - 1) {
        countFinishTask += elem.count;
      }
    });

    this.numberActiveTask.innerHTML = `${countActiveTask}`;
    this.numberFinishedTask.innerHTML = `${countFinishTask}`;
  }
}

export const countingTasks = new CountingTasks();
