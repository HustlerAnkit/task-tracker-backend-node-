const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
        text: { type: String, require: true },
        day: { type: String, require: true },
        reminder: { type: Boolean },
},{
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema, 'tasks');