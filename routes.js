const router = require('express').Router();
const TaskController = require('./controllers/task-controller');

router.get('/', TaskController.fetchTasks);
router.post('/', TaskController.createTask);
router.delete('/:taskId', TaskController.deleteTask);
router.put('/:taskId', TaskController.updateTask);
router.get('/:taskId', TaskController.fetchTask);

module.exports = router;