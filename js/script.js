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
    },
});
