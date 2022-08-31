class TaskDto{
    id;
    text;
    day;
    reminder;
    created_at;

    constructor(task){
        this.id = task._id;
        this.text = task.text;
        this.day = task.day;
        this.reminder = task.reminder;
        this.created_at = task.created_at;
    }
}

module.exports = TaskDto;