const root = new Vue({
    name: 'To Do List',
    el: '#root',
    data: {
        tasks: [
            {
                text: 'Read work emails',
                done: true,
            },
            {
                text: 'Send pitch deck to prospect',
                done: false,
            },
            {
                text: 'Draft new website homepage',
                done: false,
            },
            {
                text: 'File monthly expenses',
                done: false,
            },
            {
                text: 'Take out the bins',
                done: false,
            },
            {
                text: 'Workout',
                done: false,
            },
        ],
        newTask: {
            text: '',
            done: false,
        },
    },
    methods: {
        clearTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            if (this.newTask.text) {
                const task = { ...this.newTask };
                const taskTextCapit = task.text.replace(task.text[0], task.text[0].toUpperCase());
                task.text = taskTextCapit;
                this.tasks.push(task);
                this.newTask.text = '';
            }
        },
        taskStatus(i) {
            this.tasks[i].done = !this.tasks[i].done;
        },
    },
});
