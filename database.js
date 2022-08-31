const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URL = process.env.MONGO_URL;

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind( console, 'connection error:'));
    db.once('open', ()=>{
        console.log('DB Connected...');
    })
}

module.exports = dbConnect;