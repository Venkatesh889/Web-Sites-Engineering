import inquirer from "inquirer";
// Initialize an array to hold tasks
let tasks = [];

const showMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Add Task', 'View Tasks', 'Delete Task', 'Exit'],
            },
        ])
        .then((answers) => {
            switch (answers.action) {
                case 'Add Task':
                    addTask();
                    break;
                case 'View Tasks':
                    viewTasks();
                    break;
                case 'Delete Task':
                    deleteTask();
                    break;
                case 'Exit':
                    console.log('Goodbye!');
                    process.exit();
            }
        });
};

const addTask = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'task',
                message: 'Enter the task description:',
            },
        ])
        .then((answers) => {
            tasks.push(answers.task);
            console.log(`Task added: ${answers.task}`);
            showMenu();
        });
};

const viewTasks = () => {
    if (tasks.length === 0) {
        console.log('No tasks to show.');
    } else {
        console.log('Your Tasks:');
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
    showMenu();
};

const deleteTask = () => {
    if (tasks.length === 0) {
        console.log('No tasks to delete.');
        showMenu();
        return;
    }

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'taskNumber',
                message: 'Enter the task number you want to delete:',
                validate: (input) => {
                    const taskNumber = parseInt(input);
                    if (isNaN(taskNumber) || taskNumber < 1 || taskNumber > tasks.length) {
                        return 'Please enter a valid task number.';
                    }
                    return true;
                },
            },
        ])
        .then((answers) => {
            const taskNumber = parseInt(answers.taskNumber) - 1;
            const deletedTask = tasks.splice(taskNumber, 1);
            console.log(`Task deleted: ${deletedTask}`);
            showMenu();
        });
};

// Start the application
showMenu();