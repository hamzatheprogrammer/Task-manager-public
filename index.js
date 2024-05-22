const express = require('express');
const dbConnect = require('./views/dbconnect');
const app = express();
const port = 4890;
const {ObjectId} = require('mongodb')
const nodemailer = require('nodemailer')


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', async (req, res) => {
    try {
        let data = await dbConnect();
        const tasks = await data.find({}, { projection: { task: 1, _id: 1 } }).toArray();
        res.render('index', { message: "Hello world", tasks: tasks });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.render('index', { message: "Hello world", tasks: [] });
    }
});

// main form

app.post('/form-submit', async (req, res) => {
    const task = req.body.task;
    console.log(task);

    try {
        let data = await dbConnect();
        await data.insertOne({ task: task });
        res.redirect('/');
    } catch (error) {
        console.error('Error inserting task:', error);
        res.status(500).send('Error inserting task');
    }
});

// delete task form

app.post('/delete-task', async (req, res) =>{
    const id = req.body.taskid;
    try {
        let data = await dbConnect();
        await data.deleteOne({_id: new ObjectId(id)});
        res.redirect('/');
    }
    catch (error){
        console.error('Error deleting task:', error);
        res.status(500).send("Error deleting the task")
    }
})


app.listen(port, () => {
    console.log(`server is live on http://127.0.0.1:${port}`);
});