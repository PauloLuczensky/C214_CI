//import { v4 as uuidv4 } from 'uuid';

class Task{
        /**
     * Constructor for task.
     * @param {number} id - Task id.
     * @param {string} name - Task name.
     * @returns {string} - Task status.
     */
    constructor(id, name, status){
        this._id = id;
        this._name = name;
        this._status = status;
    }

    printSelf(){
        console.log(`ID: ${this._id}`);
        console.log(`Name: ${this._name}`);
        console.log(`Status: ${this._status}`);
    }
}

class TaskManager{
    constructor(){
        this._tasks = [];
    }

    /**
     * Add task to the list
     * @param {Task} task - A task to be added.
     */
    addTask(task){
        this._tasks.push(task);
    }

    /**
     * Remove task from the list
     * @param {number} id - Task id to be removed.
     */
    removeTask(id){
        let found = false;

        this._tasks = this._tasks.filter((task) => {
            if(task._id === id){
                found = true;
                return false;
            }
            else return true;
        });

        return found;
    }

    /**
     * Update task status from the list
     * @param {number} id - Task id to be removed.
     */
    updateTaskStatus(id, status){
        this._tasks.forEach((task) => {
            if(task._id === id){
                task._status = status;
            }
        });
    }

    /**
     * Show task present in the list
     * @returns
     */
    showTasks(){
        let numberOfTasks = 0;
        this._tasks.forEach((task) => {
            task.printSelf();
            numberOfTasks += 1;
        });
        return numberOfTasks;
    }
}

module.exports = {Task, TaskManager};
