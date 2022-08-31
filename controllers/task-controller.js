const TaskDto = require('../dtos/task-dto');
const Task = require('../models/task-model');

class TaskController{

    async fetchTasks(req, res){
        try {
            const tasks = await Task.find();
            const allTasks = tasks.map( task => new TaskDto(task));
            res.status(200).json(allTasks);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createTask(req, res){
        const { text, day, reminder } = req.body;
        const newTask = new Task({
            text,
            day,
            reminder: reminder ? true : false
        });
        try {
            const task = await newTask.save();
            const taskDto = new TaskDto(task);
            res.status(201).json(taskDto);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteTask(req, res){
        try {
            const task = await Task.findById(req.params.taskId);
            if(task){
                task.delete();
                res.status(200).json({ message: 'Task deleted successfully.' });
            }else{
                res.status(404).json({ message: 'Page Not Found.'});
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateTask(req, res){
        try{
            const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, {returnOriginal: false});
            const taskDto = new TaskDto(task);
            res.status(200).json(taskDto);
        }catch(error){
            res.status(500).json( error );
        }
    }

    async fetchTask(req, res){
        try{
            const task = await Task.findById(req.params.taskId);
            const taskDto = new TaskDto(task);
            res.status(200).json(taskDto);
        }catch(error){
            res.status(500).json(error);
        }
    }
}

module.exports = new TaskController();