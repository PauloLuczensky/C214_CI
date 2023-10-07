const { expect } = require('chai');
const { findUserById, TaskManager, Task } = require('../src/taskManager')

describe('Test scenario for Task Manager', () => {
    let taskManager;

    // First Test case
    it('Adding a task', () => {
        // Context
        taskManager = new TaskManager(); 
        const task  = new Task(1, 'Study', 'In progress');
        // Processing
        taskManager.addTask(task);
        // Evaluation
        expect(taskManager._tasks.length).to.equals(1);
    });
    
    // Second Test case
    it('Updating a task status from In progress to Done', () => {
        // Context
        taskManager = new TaskManager(); 
        const task  = new Task(1, 'Study', 'In progress');
        // Processing
        taskManager.addTask(task);
        taskManager.updateTaskStatus(1, 'Done');
        // Evaluation
        expect(task._status).to.equals('Done');
    });

    // Third Test case
    it('Updating a task status from To do to In progress', () => {
        // Context
        taskManager = new TaskManager(); 
        const task  = new Task(1, 'Study', 'To do');
        // Processing
        taskManager.addTask(task);
        taskManager.updateTaskStatus(1, 'In progress');
        // Evaluation
        expect(task._status).to.equals('In progress');
    });

    // Fourth Test case
    it('Removing a task from the list', () => {
        // Context
        taskManager = new TaskManager(); 
        const task  = new Task(1, 'Study', 'In progress');
        // Processing
        taskManager.addTask(task);
        taskManager.removeTask(1);
        // Evaluation
        expect(taskManager._tasks.length).to.equals(0);
    });

    // Fifth Test case
    it('Removing a task from the list verifying return', () => {
        // Context
        taskManager = new TaskManager(); 
        const task  = new Task(1, 'Study', 'In progress');
        let found;
        // Processing
        taskManager.addTask(task);
        found = taskManager.removeTask(0);
        // Evaluation
        expect(found).to.equals(false);
    });

    // Sixth Test case
    it('Verifying exibition of each task', () => {
        // Context
        taskManager = new TaskManager(); 
        const task  = new Task(1, 'Study', 'In progress');
        let numberOfTasks;
        // Processing
        taskManager.addTask(task);
        numberOfTasks = taskManager.showTasks();
        // Evaluation
        expect(numberOfTasks).to.equals(1);
    });
})